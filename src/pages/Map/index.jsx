import './index.scss'
// import styles from './index.module.css'
import { useEffect } from 'react'
import NavHeader from '../../components/NavHeader'
const Map=()=>{
  useEffect(()=>{
    const map=new window.BMapGL.Map("container")
    const point=new window.BMapGL.Point(116.404, 39.915)
    map.centerAndZoom(point, 15); 
  },[])
  return (
    <div className="map">
      <NavHeader>
        地图找房
      </NavHeader>
      <div id="container">Map</div>
    </div>
  )
}


export default Map