import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import NewCollection from './components/NewCollection';
import Collection from './components/Collection';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';


const App = () => {
  return (
    <div className='bg-gray-50'>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>

      {/* <Navbar />
      <Header />
      <NewCollection />
      <Collection /> */}
      <Footer />
    </div>

  )
}

export default App
