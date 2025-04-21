import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/mission" element={<Mission/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
