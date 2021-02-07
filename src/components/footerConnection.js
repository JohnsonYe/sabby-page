import React from 'react';
import '../style/footerConnection.css';

const FooterConnection = function () {
    return (
        <div className="footerConnection-section">
            <div className="semi-bold paragraph-r">Let's Connect</div>
            <div>Shoot me an email if you would like to work with me or just to say hi!</div>
            {/* <div className="contact-email"></div> */}
            <a className="mailto contact-email" href="mailto:xfsabrina0114@gmail.com">xfsabrina0114@gmail.com</a>
            <div className="social-media linkedIn">
                <a href="https://www.linkedin.com/in/sabrina-shokret-38965833/" target="_blank"><i className="fab fa-linkedin-in fa-1x"></i></a>
            </div>
        </div>
    );
}

export default FooterConnection;