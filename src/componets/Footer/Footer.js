import React from 'react';
import './Footer.css'; // Ensure this CSS file is created and correctly referenced

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: htarzyanh@gmail.com</p>
                    <p>Phone: +374 94 472 452</p>
                </div>
                <div className="footer-section social-media">
                    <div>
                        <h3>Facebook</h3>
                        <a href="https://www.facebook.com/harutyun.tarzyan">Facebook</a>
                    </div>
                    <div>
                        <h3>Linkedin</h3>
                        <a href="https://www.linkedin.com/in/tharzyan/">Linkedin</a>
                    </div>
                    <div>
                        <h3>Instagram</h3>
                        <a href="https://www.instagram.com/harut20024">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GetMovie All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
