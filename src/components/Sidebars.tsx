import React from 'react';

const Sidebars: React.FC = () => {
    return (
        <div className="sidebars">
            <div className="sidebars-left">
                <ul>
                    <li>
                        <a href='https://github.com/zromano'>
                            <img src={process.env.PUBLIC_URL + '/github.svg'} alt='Github logo'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/zromano/'>
                            <img src={process.env.PUBLIC_URL + '/linkedin.svg'} alt='Linkedin logo'/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">
                            <img src={process.env.PUBLIC_URL + '/emailLogo.svg'} alt='Email symbol'/>
                        </a>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL + '/Resume.pdf'}>
                            <img src={process.env.PUBLIC_URL + '/resumeLogo.svg'} alt='Resume symbol'/>
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
