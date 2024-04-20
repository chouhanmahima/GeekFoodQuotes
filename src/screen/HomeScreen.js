import React from 'react';
import './HomeScreen.css';
import Navbar from '../components/Navbar';
import QuoteMain from '../components/QuoteMain';
import Footer from '../components/Footer';


const HomeScreen = () => {
  return (
    <div>
     <Navbar/>
     <QuoteMain/>
     <Footer/>
     </div>
  )
}

export default HomeScreen