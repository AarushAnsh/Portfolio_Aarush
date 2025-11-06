
import React from 'react'
import './MyWork.css'
import theme_Pattern from  '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork reveal'>
        <div className="mywork-title">
          <h1> My latest work</h1>
           <img src={theme_Pattern} alt=" " />
        </div>
        <div className="mywork-container">

           {
            mywork_data.map((work,index)=>{

              return (
                <div key={index} className="work-item" onClick={() => window.open(work.w_link, '_blank')}>
                  <img src={work.w_img} alt={work.w_name}/>
                  <div className="work-overlay">
                    <h3>{work.w_name}</h3>
                    <p>{work.w_desc}</p>
                    <div className="work-tech">
                      <span>React.js • JavaScript • CSS3</span>
                    </div>
                    <div className="work-link">
                      <span>View on GitHub →</span>
                    </div>
                  </div>
                </div>
              )

            })
           }

        </div>
        <div className="mywork-showmore">
          <p>SHOW MORE </p>
          <img src={arrow_icon}  alt='' />
        </div>
    </div>
  )
}

export default MyWork
