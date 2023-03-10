import React from 'react';
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";



function Footer() {
    return (
        <div className='footer'>
            <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' className='footer-logo' />

            <ul>
                <li>Australia</li>
                <li>Brazil</li>
                <li>Canada</li>
                <li>America</li>
                <li>China</li>
                <li>Russia</li>
                <li>India</li>
                <li>Spain</li>
            </ul>

            <ul>
                <li>Conditions of Use & sale</li>
                <li>Privacy Notice</li>
                <li>Internet-based ads</li>
                <li>Amazon-clone</li>
            </ul>

            <div className='logo'>
                <h3>
                    This project is built by <span className="spanName">Naveen Vasa</span>
                </h3>
                <a href='https://www.linkedin.com/in/naveen-vasa-4a385a214/' target="blank">
                    <LinkedInIcon className="icons" />
                </a>
                <LanguageIcon className='icons' />        
            </div>
        </div>
    )
}

export default Footer
