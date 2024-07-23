import React from 'react';

import {About,Footer,Header,Skills,Testimonials,Work} from './container';
import { Navbar,NavBarr } from './components';
import './App.scss'

function App() {
  return (
    <div className='app'>
      <div className='main-nav'>
        <Navbar />
      </div>
      <div className='ph-nav'>
        <NavBarr />
      </div>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
