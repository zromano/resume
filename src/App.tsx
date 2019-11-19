import React from 'react';
import './App.scss';
import {Link} from 'react-scroll'
import {SpaceNeedleAnimation} from "./components/SpaceNeedleAnimation";
import {Navbar} from "./components/Navbar";
import {Button} from "@material-ui/core";
import {JobHistory} from "./components/JobHistory";
import {Footer} from "./components/Footer";

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
                    <div className="about">
                        <div>
                            <h1>About Me</h1>
                            <p>
                                I'm a software engineer in Seattle, WA that loves creating pages for the web.
                                I work on everything from pixel-perfect front ends to blazing-fast APIs.
                            </p>
                            <p>
                                Shortly after graduating from University of Illinois - Urbana/Champaign, I joined the
                                engineering team at Boeing where I work on a wide variety of company-changing
                                applications.
                            </p>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/avatar.png'} alt='Avatar of Zach'/>
                        </div>
                    </div>

                    <hr/>
                    <h1>Work History</h1>
                    <div className="work">
                        <JobHistory/>
                    </div>
                    <hr/>

                </main>
                <Footer/>
            </div>
        </>
    );
};

export default App;
