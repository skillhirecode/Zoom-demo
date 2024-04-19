import React from 'react';
import './Home.css';


function Home() {
  return (
    <section className="container"  style={{backgroundImage: 'url("/images/Meetingimg.jpg")', backgroundSize:'cover', width:'200%'}}>
      <section className="card__container">
        
        <div className="card__bx card__1">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx">
                <i className="fa-solid fa-pen-ruler"></i>
              </div>
            </div>
            <div className="card__content">
              <h3>Create meeting</h3>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
              <a href="#">Create</a>
            </div>
          </div>
        </div>
        {/* Development Card */}
        <div className="card__bx card__2">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx"><i className="fa-solid fa-code"></i></div>
            </div>
            <div className="card__content">
              <h3>Join meeting</h3>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
              <a href="#">Join</a>
            </div>
          </div>
        </div>
        {/* Launch Card */}
        <div className="card__bx card__3">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx"><i className="fa-solid fa-rocket"></i></div>
            </div>
            <div className="card__content">
              <h3>Meeting history</h3>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
              {/* <a href="#"></a> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
