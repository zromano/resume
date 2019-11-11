import React from 'react';
import {Link} from "react-scroll/modules";

const Navbar: React.FC = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar-brand'}>Zach Romano</div>
            <div className={'navbar-links'}>
                <div>
                    <a href={process.env.PUBLIC_URL + '/RESUME_Oct_2019.pdf'}>
                        Resume
                    </a>
                </div>
                {/*<div>*/}
                {/*    <Link*/}
                {/*        className=""*/}
                {/*        to="ha-link"*/}
                {/*        smooth={true}*/}
                {/*        delay={100}*/}
                {/*        duration={1000}*/}
                {/*    >*/}
                {/*        Link*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <div>
                    <a href="mailto:zachary.c.romano@gmail.com?Subject=Hello%20Zach" target="_top">Email</a>
                </div>
            </div>
        </div>
    );
};
export {Navbar}