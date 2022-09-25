import { Grid } from 'antd-mobile'
import './index.scss';
const Group=({groups})=>{
  return (
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
  )
}

export default Group