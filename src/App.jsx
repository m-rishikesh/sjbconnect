import '@fontsource/roboto';
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import {Button} from "@mui/material";
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CreateCards from './components/CreateCards.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Notes from './components/Notes.jsx';
import Faculties from './components/Faculties.jsx';
import Hackathon from './components/Hackathon.jsx';
import UploadForm from './components/UploadForm.jsx';

const SJBConnect = () =>{
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });
  return (
    <Router>
    <ThemeProvider theme={theme}>
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 overflow-auto p-4'>
    <Navbar/>
      <Routes>
    <Route path = '/' element={
      <>
      <Hero/>
      <CreateCards/>
      </>}/>
      <Route path = '/about' element={<About/>}/>
      <Route path = '/notes' element={<Notes/>}/>
      <Route path = '/faculty' element={<Faculties/>}/>
      <Route path = '/updates' element={<Hackathon/>}/>
      <Route path='/upload' element={<UploadForm/>}/>

    </Routes>
    </div>
    <Footer/>
    </div>
    </ThemeProvider>
    </Router>
  )
}

export default SJBConnect;
