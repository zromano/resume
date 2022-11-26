import React from 'react';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import emailLogo from '../assets/emailLogo.svg';
import resumeLogo from '../assets/resumeLogo.svg';

const Sidebars: React.FC = () => {
    return (
        <div className="sidebars">
            <div className="sidebars-left">
                <ul>
                    <li>
                        <a href='https://github.com/zromano'>
                            <img src={githubLogo} alt='Github logo'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/zromano/'>
                            <img src={linkedinLogo} alt='Linkedin logo'/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">
                            <img src={emailLogo} alt='Email symbol'/>
                        </a>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL + '/Resume.pdf'}>
                            <img src={resumeLogo} alt='Resume symbol'/>
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
