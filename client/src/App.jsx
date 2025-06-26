import './App.css'
import { ToastContainer } from 'react-toastify';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Home />
      <ToastContainer />
    </>
  )
}

export default App
