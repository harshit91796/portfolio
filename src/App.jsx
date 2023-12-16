import React from "react";
import Header from "./components/Header";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer";
import MiddleBlock from "./components/MiddleBlock";
import AboutMe from "./components/section/AboutMe";
import Experience from "./components/section/Experience";
import Skills from "./components/section/Skills";
import Achievment from "./components/section/Achievment";
import Home from "./components/section/Home";
import MyPic from "./components/MyPic";


function App() {
  return (
    <div className="t">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<MiddleBlock field={<Home/>}/>}/>
        <Route path="/aboutMe" element={<MiddleBlock field={<AboutMe/>}/>}/>
        <Route path="/Ex" element={<MiddleBlock field={<Experience/>}/>}/>
        <Route path="/skills" element={<MiddleBlock field={<Skills/>}/>}/>
        <Route path="/achievment" element={<MiddleBlock field={<Achievment/>}/>}/>
        <Route path="/myPic" element={<MiddleBlock field={<MyPic/>}/>}/>
       

      </Routes>
      
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
