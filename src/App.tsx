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
                    <div className="about">
                        <h1>About Me</h1>
                        <div className="about-content">
                            <div>
                                <p>
                                    I'm a software engineer in Seattle, WA that loves creating pages for the web.
                                    I currently work at Boeing on a team responsible for teaching others about agile
                                    and modern web development.
                                </p>
                                <p>
                                    I began my engineering journey at the University of Illinois - Urbana/Champaign
                                    where
                                    I graduated in 2017 with a degree in aerospace engineering. Aerospace led me to
                                    Boeing,
                                    where I started out as a systems engineer, but later transitioned to a software
                                    engineering
                                    role. In addition to working at Boeing, I also completed my Masters in Computer
                                    Science from Johns Hopkins University in August 2020.
                                </p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/zach.jpeg'} alt='Zach'/>
                        </div>
                    </div>
                    <hr/>
                    <div className="work">
                        <JobHistory/>
                    </div>
                    <hr/>
                    <div className="presentations">
                        <h1>Presentations</h1>
                        <div className="presentations__item">
                            <h4>Capture the Flag</h4>
                            <p>
                                Watch me demonstrate how to find the vulnerabilities in my capture the
                                flag activity
                            </p>
                            <iframe
                                title="Cature the Flag Presentation"
                                className="presentations__item_video"
                                src="https://www.youtube.com/embed/3UJVxCiLxSE?start=450"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="presentations__item">
                            <h4>Paper Presentation:</h4>
                            <p>
                                Watch me present the paper "Cross-VM Side Channels and Their Use to
                                Extract Private Keys"
                            </p>
                            <iframe
                                title="Paper Presentation"
                                className="presentations__item_video"
                                src="https://www.youtube.com/embed/BEEizbdQFkk"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className="projects">
                        <GithubProjects/>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default App;
