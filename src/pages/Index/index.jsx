import { Swiper, Grid } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../utils/selfHook.js'
import SearchHeader from '../../components/SearchHeader'
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'

import './index.scss'
const Index = () => {
  const navigate = useNavigate()
  let swipers=useFetch('/home/swiper')
  let groups=useFetch('/home/groups')
  let news=useFetch('/home/news');
  const navList = [{
    id: 1,
    imgSrc: Nav1,
    text: '整租',
    path: '/home/list'
  }, {
    id: 2,
    imgSrc: Nav2,
    text: '合租',
    path: '/home/list'
  },
  {
    id: 3,
    imgSrc: Nav3,
    text: '地图找房',
    path: '/map'
  },
  {
    id: 4,
    imgSrc: Nav4,
    text: '去出租',
    path: '/rent/add'
  }]
  return (
    <div className='index-container'>
      {/* 轮播图区域  */}
      <div className='swiper'>
       {
        swipers && swipers.length? <Swiper loop autoplay autoplayInterval={5000}>
          {
             swipers.map(item => {
              return (
                <Swiper.Item key={item.id}>
                  <a
                    href='http://itcast.cn'
                    style={{ height: 212, width: '100%', display: 'inline-block' }}
                  >
                    <img style={{ width: '100%', verticalAlign: 'top' }} src={`http://localhost:8080${item.imgSrc}`} alt="" />
                  </a>
                </Swiper.Item>
              )
            })
          }
        </Swiper>:''
       }
       {/* 搜索框 */}
       <SearchHeader cityName={'上海'} />
      </div>
      {/* 导航区域 */}
      <Grid className='nav' columns={4}>
        {
          navList.map(item => {
            return (
              <Grid.Item key={item.id} onClick={() => navigate(item.path, { replace: false })}>
                <img src={item.imgSrc} alt="" />
                <h2>{item.text}</h2>
              </Grid.Item>
            )
          })
        }
      </Grid>
      {/* 租房小组 */}
      <div className='group'>
        <h3 className='group-title'>
          租房小组 <span className='more'>更多</span>
        </h3>
        <Grid columns={2}>
          {
            groups.map(item => {
              return (
                <Grid.Item className="group-item" key={item.id}>
                  <div className="desc">
                    <p className="title">{item.title}</p>
                    <span className="info">{item.desc}</span>
                  </div>
                  <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
                </Grid.Item>
              )
            })
          }
        </Grid>
      </div>
      {/*  */}
      {/* 最新资讯 */}
      <div className="news">
        <h3 className="group-title">最新资讯</h3>
        {
          news.map(item => {
            return (
              <div className="news-item" key={item.id}>
                <div className="imgwrap">
                  <img
                    className="img"
                    src={`http://localhost:8080${item.imgSrc}`}
                    alt=""
                  />
                </div>
                <div className="content" direction="column" justify="between">
                  <h3 className="title">{item.title}</h3>
                  <div className="info" justify="between">
                    <span>{item.from}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Index