import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar-brand'}>Zach Romano</div>
            <div className={'navbar-links'}>
                <div>
                    <a href={process.env.PUBLIC_URL + '/Resume.pdf'}>
                        Resume
                    </a>
                </div>
                <div>
                    <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">Email</a>
                </div>
            </div>
        </div>
    );
};
export {Navbar}