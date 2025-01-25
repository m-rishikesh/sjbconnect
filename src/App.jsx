import '@fontsource/roboto';
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import {Button} from "@mui/material";
import Navbar from './components/navbar';
import Hero from './components/Hero';
import CreateCards from './components/CreateCards';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Notes from './components/Notes';

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

    </Routes>
    </div>
    <Footer/>
    </div>
    </ThemeProvider>
    </Router>
  )
}

export default SJBConnect;