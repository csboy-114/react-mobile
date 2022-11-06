import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import PropTypes from 'prop-types';
const NavHeader = ({children,onBack}) => {
  const navigate=useNavigate();
  const defaultHandler=()=>{
    navigate(-1)
  }
  return (
    <NavBar
      backArrow={<i className="iconfont icon-back"></i>} 
      className={styles.navBar}
      onBack={onBack || defaultHandler}
    >
       {children}
    </NavBar>
  )
}

NavHeader.propTypes={
  children: PropTypes.string.isRequired,
  back:PropTypes.func,
  className: PropTypes.string
}

export default NavHeader