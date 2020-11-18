import React from 'react';

const Footer = function () {
    return (
        <footer className="footer-section">
            <div className="footer-text">Copy Right &copy; 2020 Designed by Sabrina Shokret</div>
            <div className="footer-social-media">
                <div className="social-media instragm">
                    <a href="https://www.instagram.com/its___ssabrinaaaaa/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>

                <div className="social-media facebook">
                    <a href="https://www.facebook.com/sabrina.shokret" target="_blank"><i class="fab fa-facebook-square"></i></a>
                </div>
                
                <div className="social-media linkedIn">
                    <a href="https://www.linkedin.com/in/sabrina-shokret-38965833/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;