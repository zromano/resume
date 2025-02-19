import React from 'react';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import emailLogo from '../assets/emailLogo.svg';
import resumeLogo from '../assets/resumeLogo.svg';
import SVG from "react-inlinesvg";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href='https://github.com/zromano'>
                    <SVG src={githubLogo}/>
                </a>
                <a href='https://www.linkedin.com/in/zromano/'>
                    <SVG src={linkedinLogo}/>
                </a>
                <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">
                    <SVG src={emailLogo}/>
                </a>
                <a href={process.env.PUBLIC_URL + '/Resume.pdf'}>
                    <SVG src={resumeLogo}/>
                </a>
            </div>
            <p className="footer-name">Zach Romano <span>2025</span></p>
            <div className="footer-email">
                <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">
                    zachary.c.romano@gmail.com
                </a>
            </div>
        </div>
    )
};
export {Footer};
