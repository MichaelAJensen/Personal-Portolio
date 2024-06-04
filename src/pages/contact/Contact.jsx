import React from "react";
import "../contact/Contact.css"


const Contact = () => {
    return (
        <>
            <h1 className='contact-h1'>Michael Jensen / Software Engineer.</h1>
            <h3 className="contact-h3">Please contact me if you would like more information about my services.</h3>
            <div className="contact-outer-wrapper">
                <div className="contact-grid-container animate__zoomIn animate__animated">
                    <h1 className='enter-info-h1'>Enter your contact info please.</h1>
                    <form className='contact-form  animate__zoomIn animate__animated'>
                       
                        <input
                            className="contact-inputs"                          
                            name='firstname'
                            type="text"
                            placeholder='First Name'
                            required
                        />
                        <input
                            className="contact-inputs"                           
                            name='lastname'
                            type="text"
                            placeholder='Last Name'
                            required />
                        <input
                            className="contact-inputs"                        
                            name='email'
                            type="text"
                            placeholder='E-mail'
                            required
                        />
                        <input
                            className="contact-inputs"                       
                            name='message'
                            type="text"
                            placeholder='Message'
                            required />                   

                        <button className='contact-button' type="submit" >
                            <span>Send</span>
                        </button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Contact;

