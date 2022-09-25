import { useFetch } from '../../utils/selfHook.js'
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
  return (
    <div className='index-container'>
      {/* 轮播图区域  */}
      <div className='swiper'>
       <Swiper swipers={swipers} />
       {/* 搜索框 */}
       <SearchHeader cityName={'上海'} />
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