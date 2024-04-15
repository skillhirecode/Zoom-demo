import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

import HomePage from "./Home";


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
          
        </Router>
      
    </div>
  );    
}

export default App;
