import './index.scss'
import { useEffect } from 'react'

const Map=()=>{
  useEffect(()=>{
    const map=new window.BMapGL.Map("container")
    const point=new window.BMapGL.Point(116.404, 39.915)
    map.centerAndZoom(point, 15); 
  },[])
  return (
    <div className="map">
      <div id="container">Map</div>
    </div>
  )
}


export default Map