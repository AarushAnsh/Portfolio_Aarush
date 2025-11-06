import React from "react";
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile_img.svg"


const About = () =>{
    return(
        <div id="about" className="about reveal">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                        I am a dedicated Frontend Developer with over a year of professional experience in creating modern, responsive web applications. I specialize in React.js, JavaScript, and cutting-edge web technologies, delivering high-quality solutions that enhance user experience and drive business growth.
                    </p>
                    <p>
                        My passion for frontend development is evident in my commitment to writing clean, maintainable code and staying current with the latest industry trends. I bring both technical expertise and creative problem-solving skills to every project I undertake.
                    </p>
                </div>
                <div className="about-skills">
                   <div className="about-skill">
                     <p>React.js</p> <hr style={{width:"90%"}}></hr>
                   </div>
                   <div className="about-skill">
                     <p>JavaScript</p> <hr style={{width:"85%"}}></hr>
                   </div>
                    <div className="about-skill">
                     <p>HTML5 & CSS3</p> <hr style={{width:"80%"}}></hr>
                   </div>
                    <div className="about-skill">
                     <p>Responsive Design</p> <hr style={{width:"75%"}}></hr>
                   </div>
                   <div className="about-skill">
                     <p>Git & Version Control</p> <hr style={{width:"70%"}}></hr>
                   </div>
                   <div className="about-skill">
                     <p>UI/UX Design</p> <hr style={{width:"65%"}}></hr>
                   </div>

                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>9+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
             <div className="about-achievement">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
             

        </div>

         

          

         

        </div>
    )
}

export default About;