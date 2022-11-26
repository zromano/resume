import React from 'react';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import emailLogo from '../assets/emailLogo.svg';
import resumeLogo from '../assets/resumeLogo.svg';
import SpaceNeedle from "../assets/space-needle.svg";
import SVG from "react-inlinesvg";

const Sidebars: React.FC = () => {
    return (
        <div className="sidebars">
            <div className="sidebars-left">
                <ul>
                    <li>
                        <a href='https://github.com/zromano'>
                            <SVG src={githubLogo}/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/zromano/'>
                            <SVG src={linkedinLogo}/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">
                            <SVG src={emailLogo}/>
                        </a>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL + '/Resume.pdf'}>
                            <SVG src={resumeLogo}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebars-right">
                <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">
                    zachary.c.romano@gmail.com
                </a>
            </div>
        </div>
    );
};
export {Sidebars}
