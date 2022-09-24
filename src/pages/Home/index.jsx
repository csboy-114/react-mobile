import { Outlet ,useLocation,useNavigate} from "react-router-dom";

import { HomeIcon ,findHouseIcon ,InfoIcon ,MyIcon} from '../../assets/icon'

import { TabBar } from 'antd-mobile'

import './index.css'

const titleChange = ({ text, color = "#21b97a", active }) => {
  return active ? <span style={{ color }}>{text}</span> : <span>{text}</span>
}

const iconChange = ({ Icon, color = "#21b97a", active }) => {
  return active ? <Icon style={{ color,fontSize:'20px' }}></Icon> : <Icon style={{ fontSize:'20px' }}></Icon>
}

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const setRouteActive = (value) => {
    navigate(value, { replace: false });
  }
  const tabs = [
    {
      key: '/home',
      title: active => titleChange({ text: '首页', active }),
      icon: active => iconChange({Icon:HomeIcon,active}),
    },
    {
      key: '/home/list',
      title: active => titleChange({ text: '找房', active }),
      icon: active =>iconChange({Icon:findHouseIcon,active}), 
    },
    { 
      key: '/home/news',
      title: active => titleChange({ text: '资讯', active }),
      icon: active =>iconChange({Icon:InfoIcon,active}),
    },
    {
      key: '/home/profile',
      title: active => titleChange({ text: '我的', active }),
      icon: active =>iconChange({Icon:MyIcon,active}),
    },
  ]
  return (
    <div className="home">
      <Outlet />
      <TabBar activeKey={pathname} className="self-tabbar" onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

export default Home