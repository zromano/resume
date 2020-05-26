import React from 'react';
import './App.scss';
import {SpaceNeedleAnimation} from "./components/SpaceNeedleAnimation";
import {Navbar} from "./components/Navbar";
import {JobHistory} from "./components/JobHistory";
import {Footer} from "./components/Footer";
import {GithubProjects} from "./components/GithubProjects";

const App: React.FC = () => {
    return (
        <>
            <SpaceNeedleAnimation/>
            <Navbar/>
            <div className="App">
                <div className="hero">
                    <h1>Hi, I'm Zach</h1>
                    <h2>I'm a full stack developer in Seattle.</h2>
                </div>
                <hr/>
                <main>
                    <div className="about section">
                        <h1>About Me</h1>
                        <div className="about-content">
                            <div>
                                <p>
                                    I'm a software engineer in Seattle, WA that loves creating pages for the web.
                                    I work on everything from pixel-perfect front ends to blazing-fast APIs.
                                </p>
                                <p>
                                    Shortly after graduating from University of Illinois - Urbana/Champaign, I joined
                                    the
                                    engineering team at Boeing where I work on a wide variety of company-changing
                                    applications.
                                </p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/zach.jpeg'} alt='Zach'/>
                        </div>
                    </div>

                    <hr/>
                    <div className="work section">
                        <JobHistory/>
                    </div>
                    <hr/>
                    <div className="projects section">
                        <GithubProjects/>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default App;
