import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MiddleBlock from './components/MiddleBlock'
import AboutMe from './components/section/AboutMe'
import Experience from './components/section/Experience'
import Skills from './components/section/Skills'
import Achievment from './components/section/Achievment'
import Home from './components/section/Home'
import MyPic from './components/MyPic'
import FileEditor from './components/section/FileEditor'
import OnboardingToast from './components/OnboardingToast'
import { FilesProvider } from './context/FilesContext'
import './App.css'

function App() {
  return (
    <FilesProvider>
      <div className="t">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MiddleBlock field={<Home />} />} />
            <Route path="/aboutMe" element={<MiddleBlock field={<AboutMe />} />} />
            <Route path="/Ex" element={<MiddleBlock field={<Experience />} />} />
            <Route path="/skills" element={<MiddleBlock field={<Skills />} />} />
            <Route path="/achievment" element={<MiddleBlock field={<Achievment />} />} />
            <Route path="/myPic" element={<MiddleBlock field={<MyPic />} />} />
            <Route path="/file/:name" element={<MiddleBlock field={<FileEditor />} />} />
          </Routes>
          <Footer />
          <OnboardingToast />
        </BrowserRouter>
      </div>
    </FilesProvider>
  )
}

export default App
