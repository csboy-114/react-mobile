import { Grid } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import Nav1 from '../../../../assets/images/nav-1.png'
import Nav2 from '../../../../assets/images/nav-2.png'
import Nav3 from '../../../../assets/images/nav-3.png'
import Nav4 from '../../../../assets/images/nav-4.png'

import './index.scss'
const Nav=()=>{
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
  const navigate=useNavigate()
  return (
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
  )
}

export default Nav