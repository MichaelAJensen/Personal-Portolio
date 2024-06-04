import React from "react";
import "../projects/Projects.css";
// import { Link} from "react-router-dom";

const Projects = () => {
    return (
        <>    
            <h1 className='projects-h1'>Michael Jensen / Software Engineer.</h1>
            <h3 className="projects-h3">Early Projects Demonstrating My HTML/CSS, Bootstrap, and React/Redux Skills.</h3>
            <div className="projects-wrapper">
                <div className="projects animate__animated animate__zoomIn">
                
                    <div className='project-container animate__animated animate__zoomIn'>
                    <div className='project-links'>
                        <nav className='project-nav-links' >                        
                        <li><a href=" https://michaelajensen.github.io/pomodoroClock/" target="_blank" rel="noreferrer" className="profile-link">Pomodoro Clock</a></li>

                            <li><a href=" https://michaelajensen.github.io/Nutrition-Label/" target="_blank" rel="noreferrer" className="profile-link">Nutrition Label</a></li>
                                                            
                            <li><a href="https://michaelajensen.github.io/petWorld/" target="_blank" rel="noreferrer" className="profile-link">Mike's Pet World</a></li>

                        </nav>
                    </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Projects;