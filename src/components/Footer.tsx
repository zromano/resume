import React from 'react';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import emailLogo from '../assets/emailLogo.svg';
import resumeLogo from '../assets/resumeLogo.svg';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href='https://github.com/zromano'>
                    <img src={githubLogo} alt='Github logo'/>
                </a>
                <a href='https://www.linkedin.com/in/zromano/'>
                    <img src={linkedinLogo} alt='Linkedin logo'/>
                </a>
                <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">
                    <img src={emailLogo} alt='Email symbol'/>
                </a>
                <a href={process.env.PUBLIC_URL + '/Resume.pdf'}>
                    <img src={resumeLogo} alt='Resume symbol'/>
                </a>
            </div>
            <p className="footer-name">Zach Romano <span>2023</span></p>
            <p>
                <span>zachary.c.romano@gmail.com</span>
            </p>
        </div>
    )
};
export {Footer};
