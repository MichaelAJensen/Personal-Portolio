import React from "react";
import "../about/About.css"

const About = () => {
    return (
        <>
            <h1 className='about-h1'>Michael Jensen / Software Engineer.</h1>
            <h3 className="about-h3">Proven ability to handle both front-end and back-end development using the MERN stack.</h3>
            <div className="about-wrapper">
                <div className="about animate__animated  animate__zoomIn">
                    <h1 className='about-info'> I am a full-stack web developer from Chicago, IL and currently working out of sunny Glendale, Arizona I am a family man who loves the outdoors and am an avid sports fan.</h1>
                    <div className='about-container animate__animated animate__zoomIn'>
                        <h1 className='container-h1'>If you would like more info on my professional background, please visit my links:</h1>

                        <ul>
                            <li><a href="/resume.pdf" target="_blank" rel="noreferrer" className="profile-link fas fa-file-pdf"> My Resume (PDF)
                            </a></li>

                            <li><a href="https://github.com/MichaelAJensen" target="_blank" rel="noreferrer" className="profile-link"><p className='fab fa-github p-tag'></p></a></li>

                            <li><a href="https://www.linkedin.com/in/michael-jensen-b0217379" target="_blank" rel="noreferrer" className="profile-link"><p className='fab fa-linkedin p-tag'></p></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About

