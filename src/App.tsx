import React from 'react';
import './App.scss';
import {Link} from 'react-scroll'
import SpaceNeedle from './space-needle.svg';
import SVG from 'react-inlinesvg';

const App: React.FC = () => {
  return (
    <>
      <div className={'space-needle-animation'}>
        <SVG src={SpaceNeedle}/>
      </div>
      <div className="App">
        <div className={"background"}>
          <section className="hero">
            <div className="hero-content">
              <div className={'header'}>
                <h1>Hi, I'm Zach</h1>
                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt={'Avatar of Zach'}/>
              </div>
              <h2>I'm a full stack developer in Seattle.</h2>
              <button type="button">
                <Link
                  className=""
                  to="here"
                  smooth={true}
                  delay={100}
                  duration={1000}
                >
                  Scroll down
                </Link>
              </button>
            </div>
          </section>
        </div>
        <main id={'here'}>
          Hi, I have many, many skils
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
          <h1>ha</h1>
        </main>
      </div>
    </>
  );
}

export default App;
