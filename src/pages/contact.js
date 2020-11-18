import React from 'react';
import '../style/contact.css'
import emailjs from "emailjs-com";

const Contact = function() {
    const user_id = "user_tedGkqjQtoSHRFRzewfWJ";
    const service_id = "service_g3o1q27";
    const template_id = "template_t6a6k2j"
    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm(service_id, template_id, e.target, user_id)
            .then(result => {
                console.log('good', result.text);
            }).catch(error => {
                console.log('bad', error.text);
            });
    }
    
    return (
        <div className="contact-container">
            <div className="contact-form">
                <div className="contact-header header">
                    Contact
                </div>

                <div className="contact-note sub-title">
                    Thank you for your interest in contacting me!
                    <br/>
                    please fill out the boxes below and I will return you request ASAP!
                </div>

                <div className="form-section">
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="contact-name">First & Last Name<sup>*</sup></label>
                            <input id="contact-name" type="text" className="form-control" name="from_name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-email">Email<sup>*</sup></label>
                            <input id="contact-email" type="text" className="form-control" name="from_email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">Message<sup>*</sup></label>
                            <textarea id="contact-message" type="text" className="form-control" name="message" />
                        </div>

                        <div className="form-submit">
                            <input type="submit" className="btn btn-submit" value="SEND"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;