import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

import HomePage from "./Home";
import Signup from "./Signup";
import Landing from "./Landing";


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
          
        </Router>
      
    </div>
  );    
}

export default App;
