import React from 'react';
import './App.scss';
import {Link} from 'react-scroll'
import {SpaceNeedleAnimation} from "./components/SpaceNeedleAnimation";
import {Navbar} from "./components/Navbar";
import {Button} from "@material-ui/core";

const App: React.FC = () => {
    return (
        <>
            <SpaceNeedleAnimation/>
            <div className="App">
                <div className={"background"}>
                    <section className="hero">
                        <div className="hero-content">
                            <div className={'header'}>
                                <h1>Hi, I'm Zach</h1>
                                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt='Avatar of Zach'/>
                            </div>
                            <h2>I'm a full stack developer in Seattle.</h2>
                            <Link
                                className=""
                                to="navbar"
                                smooth={true}
                                delay={100}
                                duration={1000}
                            >
                                <Button variant="contained" color="secondary">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>
                <Navbar/>
                <main>
                    <p>This site is a work in progress and will have more content soon :) </p>
                    <h1>About Me</h1>
                    <div className="work">
                        <div className="work-company">
                            <h2>The Boeing Company</h2> Greater Seattle Area, WA
                            <div className="work-company-role">
                                <h4>Full Stack Developer and Consultant</h4>
                                <div className="work-company-role-duration">March 2019-Present</div>
                                <ul>
                                    <li>
                                        Paired with developers from other teams to spread modern software development
                                        practices
                                    </li>
                                    <li>
                                        Facilitated courses that introduced new frameworks and software tools to
                                        developers
                                    </li>
                                    <li>
                                        Utilized Test-Driven Development and a Kanban board as part of the Extreme
                                        Programming
                                        development principles
                                    </li>
                                    <li>Created automated pipelines to build, test, and deploy apps to the cloud</li>
                                    <li>Developed an Express server that used GraphQL to serve/write data</li>
                                    <li>
                                        Deployed a React app that utilized SSO and JWTs to securely authenticate users
                                    </li>
                                    <li>Crafted RESTful apis with Springboot and Kotlin</li>
                                    <li>
                                        Co–developed an app to optimize purchasing that discovered $1.5 billion in
                                        unrealized savings
                                        and has already saved over $1 million annually
                                    </li>
                                </ul>
                            </div>
                            <h4>Systems Engineering Rotation Program</h4>
                            <div className="work-company-role-duration">August 2017-March 2019</div>

                            <h4>Data Analyst – Program Management Analytics Team</h4>
                            <div className="work-company-role-duration">June 2018-March 2019</div>
                            <ul>
                                <li>
                                    Created a website using .NET to host real-time visualizations created by our team
                                </li>
                                <li>
                                    Visualized data in Tableau that eliminated hundreds of hours spent on presentations
                                    annually
                                </li>
                                <li>
                                    Connected engineering, production, and supply chain data to provide metrics on part
                                    changes all the way from design to installation
                                </li>
                                <li>
                                    Designed a risk management visualization package used by BCA, BDS, and Boeing IT
                                </li>
                            </ul>
                            <h4>Risk Management – Airplane Level Integration Team</h4>
                            <div className="work-company-role-duration">August 2017-June 2018</div>
                            <ul>
                                <li>Managed risks, issues, and opportunities for a team of 300+ people</li>
                                <li>Maintained proper risk mitigation plans for teams and individual engineers</li>
                                <li>Educated executives every week about the current level of risk on the 777X</li>
                                <li>
                                    Eliminated 90 engineer man-hours quarterly implementing report automation using
                                    VBA
                                </li>
                                <li>Used R to aide a data analytics team by compressing several large data exports</li>
                            </ul>
                        </div>
                    </div>

                </main>
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
                    <p>Zach Romano <span> 2019</span></p>
                </div>
            </div>
        </>
    );
};

export default App;
