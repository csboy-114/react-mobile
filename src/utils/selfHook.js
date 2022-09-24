import { useState, useEffect } from 'react'


export const useFetch=(url)=>{
  let [data,setData] = useState([])
  const fetchData=async()=>{
    const {data}=await window.$http.get(url)
    if(data.status===200){
      setData(data.body)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return data
}