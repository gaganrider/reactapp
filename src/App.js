// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './pages/Home';
import Friend from './pages/Friend';
import Profilepage from './pages/Profilepage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Chat from './pages/Chat';
import { PostItem } from './comps/Array';
// import Profile from './comps/Profile';
import Storypage from './pages/Storypage';
import { useState } from 'react';
import Navbar from './comps/Navbar';







function App() {

  const[cls, setCls]=useState("light");
  const [flex, setFlex] = useState("translateX(0%)");
  const myStyle={ transform:flex};

 const toggleTheme = () => {
  if (cls === 'light'){setCls('dark');setFlex("translateX(100%)")}
  else{setCls('light');setFlex("translateX(0%)")}
    console.log('clicked')};

  return (
    <div className={cls}>
     <Router>
     <div className="mode"
        onClick={toggleTheme} 
         >
        <div 
        style={myStyle}
        ></div>
       </div>
      <Navbar toggleTheme={toggleTheme} />
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/profile" element={<Profilepage dp="https://uploads.dailydot.com/2022/04/andrew-garfield-laughing.jpg?auto=compress&fm=pjpg" username="Bluepants" name="Peter parker"/>} />
          <Route path="/chat" element={<Chat/>} />
          

          {PostItem.map((item) => (
            <Route path={item.profile} element={<Profilepage dp={item.dp} username={item.username} name={item.name} />} />
          ))}
          {PostItem.map((item) => (
            <Route path={item.story} element={<Storypage img={item.dp} dp={item.post} username={item.username} />} />
          ))}
          {PostItem.map((item) => (
            <Route path={item.chat} element={<Chat dp={item.dp} username={item.username} link={item.profile} />} />
          ))}
           
        </Routes>
      </Router>
    </div>
  );
}



export default App;
