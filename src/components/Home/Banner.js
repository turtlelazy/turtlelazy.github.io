import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import LinkedIn from '../AsciiLogos/LinkedIn';
import Github from '../AsciiLogos/Github';
import Email from '../AsciiLogos/Email';

const Banner = () => {
    const bannerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#000000',
    };

    const iconStyle = {
        display: 'flex',
        gap: '20px',
    };

    const logoStyle = {
        height: '50px', // Adjust according to your needs
    };

    const linkStyle = {
        color: '#0D0',
        cursor: 'url(cursor-open.png),auto'
    };

    return (
        <div style={bannerStyle} >
            <div>
                <img src="fish.png" alt="Logo" style={logoStyle} />
            </div>
            
            <div style={iconStyle}>
                <a href="https://github.com/turtlelazy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/ishraq-mahid//" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    <LinkedIn />
                </a>
                <a href="mahidishraq@gmail.com" style={linkStyle}>
                    <Email/>
                </a>
            </div>

        </div>
    );
};

export default Banner;
