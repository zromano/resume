import React from 'react';
import './App.scss';
import {Link} from 'react-scroll'
import {SpaceNeedleAnimation} from "./components/SpaceNeedleAnimation";
import {Navbar} from "./components/Navbar";
import {Button} from "@material-ui/core";

const App: React.FC = () => {
  return (
    <>
      <SpaceNeedleAnimation />
      <div className="App">
        <div className={"background"}>
          <section className="hero">
            <div className="hero-content">
              <div className={'header'}>
                <h1>Hi, I'm Zach</h1>
                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt={'Avatar of Zach'}/>
              </div>
              <h2>I'm a full stack developer in Seattle.</h2>
              <Link
                className=""
                to="here"
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
        <main id={'here'}>
          <Navbar />
          <p> This site is a work in progress and will have more content soon :) </p>
          <h1 className="make-scrollable"> About Me </h1>


          <h1 id="ha-link">link</h1>
        </main>
      </div>
    </>
  );
};

export default App;
