import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResCart from './components/resCart/ResCart';
import Contect from './components/contact/Contect';
import Header  from './components/header/Header'
import Footer from './components/footer/Footer'
import ResMenu from './components/resMenuPage/ResMenu';

function App() {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<ResCart />} />
        <Route path="/contact/:Id" element={<Contect />} />
        <Route path="res/:resId" element={<ResMenu/>}/>
      </Routes>
      <Footer/>
    </Router>
    // <Banner/>
  );
}

export default App;
