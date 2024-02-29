import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Home from './components/pages/Home'; 
import AboutUs from './components/pages/AboutUs';
import Quotations from './components/pages/Quotations';
import VehicleTypeSelector from './components/autenticacion/VehicleTypeSelector';
import Login from './components/autenticacion/Login';
import Register from './components/autenticacion/Register';
import Header from './components/autenticacion/Header';
import Footer from './components/autenticacion/Footer';
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home></Home>} />
        
        <Route path="/AboutUs" element={<AboutUs></AboutUs>} />
        <Route path="/quotations" element={<VehicleTypeSelector></VehicleTypeSelector>} />
        <Route path="/quotations/:vehicleType" element={<Quotations></Quotations>} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/Register" element={<Register></Register>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

