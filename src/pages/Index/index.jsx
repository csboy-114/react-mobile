import { useFetch ,getCurrentCity } from '../../utils/index.js'
import { useEffect,useState } from 'react'
import SearchHeader from '../../components/SearchHeader'
import Swiper from "./components/Swiper";
import Nav from './components/Nav';
import Group from './components/Group'
import News from './components/News'
import './index.scss'

const Index = () => {
  let swipers=useFetch('/home/swiper')
  let groups=useFetch('/home/groups')
  let news=useFetch('/home/news');
  let [cityName,setCityName]=useState('上海')
  useEffect(()=>{
    async function fn(){
      const res = await getCurrentCity()
      setCityName(JSON.parse(res).label)
    }
    fn()
  },[])
  
  return (
    <div className='index-container'>
      {/* 轮播图区域  */}
      <div className='swiper'>
       <Swiper swipers={swipers} />
       {/* 搜索框 */}
       <SearchHeader cityName={cityName} />
      </div>
      {/* 导航区域 */}
      <Nav/>
      {/* 租房小组 */}
      <Group groups={groups}/>
      {/*  */}
      {/* 最新资讯 */}
      <News news={news}/>
    </div>
  )
}

export default Index