import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

import HomePage from "./Home";
import Signup from "./Signup";
import Landing from "./Landing";
import Videocall from "./Videocall";
import Dashboard from "./Dashboard";
import Booking from "./Booking";
import Userlogin from "./Userlogin";
import Createmeeting from "./Createmeeting";




function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/homePage" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup/>} />
          </Routes>
          <Routes>
            <Route path="/landing" element={<Landing/>} />
          </Routes>
            <Routes>
            <Route path="/videocall" element={<Videocall/>} />
          </Routes>  
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
          <Routes>
            <Route path="/booking" element={<Booking/>} />
          </Routes>
          <Routes>
            <Route path="/Userlogin" element={<Userlogin/>}/>
          </Routes>
          <Routes>
            <Route path="/Createmeeting" element={<Createmeeting/>}/>
          </Routes>
         
          
        </Router>
      
    </div>
  );    
}

export default App;
