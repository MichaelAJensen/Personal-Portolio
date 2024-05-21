import React from "react";
import "../home/Home.css"
import jsPic from "../../assets/JavaScript-logo.png"
import htmlPic from "../../assets/html.png"
import cssPic from "../../assets/CSS3_logo_and_wordmark.svg.png"
import bootStrapPic from "../../assets/bootstrap pic.png"
import reactPic from "../../assets/react.png"
import jQueryPic from "../../assets/jquery.png"
import mongoDbPic from "../../assets/mongodb.png"
import expressPic from "../../assets/express-Node.png"

const Home = () => {
    return (
        <>
            <h1 className='home-h1'>Michael Jensen / Software Engineer.</h1>
            <h3 className="home-h3">My Full-stack Developer Tools.</h3>
            <div className="home-outer-wrapper">
                <div className="home-grid-container animate__zoomIn animate__animated">
                    <div className="grid-item"><img src={htmlPic} alt="html pic" className='html-pic' /></div>
                    <div className="grid-item"><img src={cssPic} alt="css pic" className='css-pic' /></div>
                    <div className="grid-item"><img src={jsPic} alt="javaScript pic" className='js-pic' /></div>
                    <div className="grid-item"><img src={reactPic} alt="react pic" className='react-pic' /></div>
                    <div className="grid-item"><img src={bootStrapPic} alt="bootStrap pic" className='bootStrap-pic' /></div>
                    <div className="grid-item"><img src={jQueryPic} alt="jQueryPic pic" className='jquery-pic' /> </div>
                    <div className="grid-item"><img src={mongoDbPic} alt="mongoDB pic" className='mongodb-pic' /></div>
                    <div className="grid-item"><img src={expressPic} alt="express-node pic" className='express-node-pic' /></div>
                    <div className="grid-item"> <p className="home-span">More references available upon request.</p></div>
                </div>
           
            </div>
           
        </>

    )

}

export default Home;