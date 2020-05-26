import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href='https://github.com/zromano24'>
                    <img src={process.env.PUBLIC_URL + '/github.svg'} alt='Github logo'/>
                </a>
                <a href='https://www.linkedin.com/in/zromano/'>
                    <img src={process.env.PUBLIC_URL + '/linkedin.svg'} alt='Linkedin logo'/>
                </a>
                <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">
                    <img src={process.env.PUBLIC_URL + '/emailLogo.svg'} alt='Email symbol'/>
                </a>
                <a href={process.env.PUBLIC_URL + '/RESUME_Oct_2019.pdf'}>
                    <img src={process.env.PUBLIC_URL + '/resumeLogo.svg'} alt='Resume symbol'/>
                </a>
            </div>
            <p className="footer-name">Zach Romano <span>2020</span></p>
            <p>
                <span>zachary.c.romano@gmail.com</span>
            </p>
        </div>
    )
};
export {Footer};