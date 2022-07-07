import React from 'react';
import Bootcamp from './components/bootcamps';
import Contact from './components/contactmap';
import Features from './components/features';
import Footer from './components/footer';
import Pform from './components/form';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Team from './components/team';

function App(){
    return <div>
        <Navbar/>
        <Hero/>
    <Features/>
    <Pform/>
    <Bootcamp/>
    <Contact/>
    <Team/>
    <Footer/></div>
}

export default App;