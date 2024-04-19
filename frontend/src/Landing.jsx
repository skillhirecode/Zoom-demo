import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
        <>
            <nav>
                <input type="checkbox" id="nav-toggle" />
                {/* <div className="header_logo">
                    <a className="logo" href="#"><img className="logo-img" src="/images/logogif (1).gif" alt=""/></a>
                </div>
                 */}
                <ul className="links">
                    {/* <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li> */}
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Book appointment</a></li>
                </ul>
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
                {/* <div class="header_logo">
              <a class="logo" href="#"><img class="logo-img" src="images/logogif (1).gif"></a>
          </div> */}
            </nav>
            <div className="animation-container">
                <h1 className="animation-text">Welcome to SkillZoom</h1>
            </div>

            {/* <div className="container">
                <img src="https://picsum.photos/id/559/1000/1000.jpg" alt="" />
                <img src="https://picsum.photos/id/558/1000/1000.jpg" alt="" />
            </div> */}
            {/* <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label> */}
        </>
    );
};

export default Landing;
