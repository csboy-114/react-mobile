import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getCurrentCity } from '../../utils'
import './index.scss'
const formatCityData=list=>{
  const cityList={}
  if(Array.isArray(list) && list.length>0){
    list.forEach(item=>{
      const first=item.short.substr(0,1)
      if(cityList[first]){
        cityList[first].push(item)
      }else{
        cityList[first]=[item]
      }
    }) 
  }
  const cityIndex=Object.keys(cityList).sort()
  return {
    cityList,
    cityIndex
  }
}
const CityList= ()=>{
  const navigate=useNavigate()
  const back=()=>{
    navigate(-2)
  }
  useEffect(()=>{
    const getCityList=async()=>{
      const res=await window.$http.get('/area/city?level=1')
      const {cityList,cityIndex} = formatCityData(res)
      const hotRes=await window.$http.get('/area/hot')
      cityList['hot']=hotRes
      cityIndex.unshift('hot')
      console.log('cityIndex',cityIndex);
      // 获取当前定位城市
      const currentCity= await getCurrentCity()
      
    }
    getCityList()
  },[])
  return (
    <div className="citylist">
      <NavBar backArrow={<i className="iconfont icon-back"></i>} className="navbar" onBack={back}>城市选择</NavBar>
    </div>
  )
}

export default CityList