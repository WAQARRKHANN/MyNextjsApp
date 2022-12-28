import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom'; 
import Products from './pages/Products';
import Company from './pages/Company';
import Home from './Home';
import Sms from './pages/Sms';
import Events from './pages/Events';
import Services from './pages/Services';
import Cookies from './pages/Cookies';
import Privacy from './pages/Privacy';
import Career from './pages/Career';

function App() {
  return (
      <>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="Products" element={<Products/>} />
    <Route path="Company" element={< Company/>} />
    <Route path="Services" element={<Services/>} />
    <Route path="Sms" element={< Sms/>} />
    <Route path="Events" element={<Events/>} />
    <Route path="Cookies" element={<Cookies/>} />
    <Route path="Privacy" element={<Privacy/>} />
    <Route path="Career" element={<Career/>} />
</Routes>
     </> 
  );
}

export default App;
