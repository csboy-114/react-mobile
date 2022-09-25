import './index.scss'
const News=({news})=>{
  return (
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
  )
}

export default News;