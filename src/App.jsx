import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';
function App(){
    return(
        <>
        <Header/>
        <Hero/>
        <About/>
        <VolunteerForm/>
        <Footer/>
        </>
    );
}
export default App;