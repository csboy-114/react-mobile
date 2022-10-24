import { useState, useEffect } from 'react'

const useFetch = url =>{
  let [data,setData] = useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const data=await window.$http.get(url)
      setData(data)
    }
    fetchData()
  },[])
  return data
}

const getCurrentCity=()=>{
  const localCity=localStorage.getItem('hkzf_city')
  if(!localCity){
    return new Promise((resolve, reject) =>{
      let myCity = new window.BMapGL.LocalCity();
    myCity.get(async res=>{
      try {
        let result =  await window.$http.get(`/area/info?name=${res.name}`)
        localStorage.setItem('hkzf_city',JSON.stringify(result))
        resolve(result)
      } catch (error) {
        reject(error)
      }
    }); 
    })
  }
  return Promise.resolve(JSON.parse(localCity))
}

export {
  useFetch,
  getCurrentCity
}