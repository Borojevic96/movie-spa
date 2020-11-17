import React from "react";

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div>
                <p>©{new Date().getFullYear()} Movie SPA</p>
                <p>Made by <a href="https://www.linkedin.com/in/slavisa-borojevic/" target='_blank'>Borojevic S.</a></p>
            </div>
        </div>
    )
}

export default Footer;