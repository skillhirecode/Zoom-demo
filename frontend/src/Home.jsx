import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function HomePage() {
  return (
    
    <div className="home-page">
      <h1>Welcome to Skill Zoom</h1>
      
      
      {/* <div className="user-profile">
        <img src="" alt="Profile" />
        <h2>Username</h2>
        <p>Email: user@example.com</p>
        <Link to="/edit-profile">Edit Profile</Link>
      </div> */}

      
      {/* <div className="box-container">
      <div className="meeting-schedule-box">
         <h2>Upcoming events</h2>
        <ul>
          <li>Meeting 1 - Date/Time</li>
          <li>Meeting 2 - Date/Time</li>
          
        </ul> 
      </div>
      </div> */}
      
      <div className="box-container">
      <div className="create-join-meeting-box">
        <h1>Create Meeting</h1>
         <Link to="/create-meeting">Create Meeting</Link>
         <FontAwesomeIcon icon={faVideo} />

        <Link to="/join-meeting">Join Meeting</Link> 
      </div>
      </div>
      
<div className="box-container">
      <div className="meeting-history-box">
        <h2>Meeting History</h2>
        <ul>
          <li>Past Meeting 1 - Date/Time</li>
          <li>Past Meeting 2 - Date/Time</li>
          
        </ul>
      </div>
      </div>
      
      
      <div className="chat">
        <h2>Chat</h2>
        
      </div>
      
      
      <div className="settings">
        <Link to="/settings">Settings</Link>
      </div>
      
      <div className="help-support">
        <Link to="/help">Help & Support</Link>
      </div>
    </div>
  );
}

export default HomePage;
 