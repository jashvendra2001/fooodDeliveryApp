import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResCart from './components/resCart/ResCart';
import Contect from './components/contact/Contect';
import Header  from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<ResCart />} />
        <Route path="/contact/:Id" element={<Contect />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
