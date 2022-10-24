import { NavBar,Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { useEffect ,useState ,useRef } from 'react'
import { getCurrentCity } from '../../utils'
import { List ,AutoSizer } from 'react-virtualized';
import './index.scss'

// 索引高度
const TITLE_HEIGHT =36
// 城市高度
const NAME_HEIGHT=50



// 有房源的城市
const HOUSE_CITY = ['北京', '上海', '广州', '深圳']

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

const formatCityIndex=letter=>{
  switch (letter) {
    case '#':
      return '当前定位'
    case 'hot':
      return '热门城市'
    default:
      return letter.toUpperCase()
  }
}
const CityList= ()=>{
  const cityListComponent = useRef()
  const navigate=useNavigate()
  const back=()=>{
    navigate(-1)
  }
  const [ cityList, setCityList] =useState({})
  const [ cityIndex, setCityIndex] =useState([])
  const [ activeIndex, setActiveIndex] =useState(0)
  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) {
    // 获取每一行的字母索引
    const letter = cityIndex[index]    
    return (
      <div key={key} style={style} className="city">
        <div className="title">{ formatCityIndex(letter) }</div>
        {/* <div className="name">上海</div> */}
        {
          cityList[letter].map(item => (
            <div onClick={()=>changeCity(item)} className="name" key={item.value}>{ item.label }</div>
          ))
        }
      </div>
    );
  }
  const changeCity=({label,value})=>{
    if (HOUSE_CITY.indexOf(label) > -1) {
      // 有
      localStorage.setItem('hkzf_city', JSON.stringify({ label, value }))
      navigate(-1)
    } else {
      Toast.show({content:'该城市暂无房源数据'})
    }
  }
  function getRowHeight({index}) {
     return TITLE_HEIGHT + cityList[cityIndex[index]].length * NAME_HEIGHT
  }
  // 封装渲染右侧索引列表的方法
  function renderCityList(){
    // 获取cityIndex，并且去渲染
    return cityIndex.map((item,index)=>(
      <li className='city-index-item' key={item} onClick={()=>{
        cityListComponent.current.scrollToRow(index)
      }}>
        <span className={activeIndex === index ? 'index-active' : ''}>{item === 'hot' ? '热':item.toUpperCase()}</span>
      </li>
      )
    )
  }
  // onRowsRendered
  const onRowsRendered=({startIndex})=>{
    if(activeIndex!==startIndex){
      setActiveIndex(startIndex)
    }
  }
  
  useEffect(()=>{
    const getCityList=async()=>{
      const res=await window.$http.get('/area/city?level=1')
      const {cityList,cityIndex} = formatCityData(res)
      const hotRes=await window.$http.get('/area/hot')
      cityList['hot']=hotRes
      cityIndex.unshift('hot')
      // 获取当前定位城市
      const currentCity= await getCurrentCity()
      cityList['#']=[currentCity]
      cityIndex.unshift('#')
      setCityList(cityList)
      setCityIndex(cityIndex)
    }
    async function run(){
      await getCityList()
      setTimeout(()=>{
        cityListComponent.current.measureAllRows()
      },0)
    }
    run()
  },[])
  return (
    <div className="citylist">
      <NavBar backArrow={<i className="iconfont icon-back"></i>} className="navbar" onBack={back}>城市选择</NavBar>
      {/* 城市列表 */}
      <AutoSizer>
        {
          ({width,height})=>
          (<List
            width={width}
            height={height}
            rowCount={cityIndex.length}
            rowHeight={getRowHeight}
            rowRenderer={rowRenderer}
            onRowsRendered={onRowsRendered}
            ref={cityListComponent}
            scrollToAlignment="start"
          />)
        }
      </AutoSizer>
      {/* 右侧索引列表 */}
      <ul className='city-index'>
       {
        renderCityList()
       }
      </ul>
    </div>
  )
}

export default CityList