import React from 'react';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NewCollection from './components/newCollection/NewCollection';
import Collection from './components/collection/Collection';


const App = () => {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <Header />
      <NewCollection />
      <Collection />
      <Footer />
    </div>

  )
}

export default App
