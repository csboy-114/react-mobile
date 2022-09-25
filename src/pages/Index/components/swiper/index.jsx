import { Swiper } from 'antd-mobile'
const swiper= ({ swipers }) => {
  return (
    swipers && swipers.length ? <Swiper loop autoplay autoplayInterval={5000}>
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
  </Swiper> : ''
  )
}
export default swiper