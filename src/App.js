import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/autenticacion/Header';
import Footer from './components/autenticacion/Footer';
import Home from './components/pages/Home'; 
import AboutUs from './components/pages/AboutUs';
import Quotations from './components/pages/Quotations';
import VehicleTypeSelector from './components/autenticacion/VehicleTypeSelector';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/quotations" component={VehicleTypeSelector} />
        <Route path="/quotations/:vehicleType" component={Quotations} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

