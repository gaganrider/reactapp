// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PostItem } from './comps/Array';







function App() {
  return (
    <div >
     <Router>
    
    
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
         
          
        </Routes>
      </Router>
    </div>
  );
}



export default App;
