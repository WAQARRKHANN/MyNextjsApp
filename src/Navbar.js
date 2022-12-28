import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import logo from './images/ltest_logo.png'
import {ReactNavbar} from "overlay-navbar";

function Navbar() {
  
  return (
   <>
   <section className="nvbr">
   <div className="container nvbr_container">
   <nav class="navbar navbar-expand-lg navbar-light">
  <Link class="navbar-brand" to="/">
    <img src={logo} />
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
       <Link className="homie" to='/'>Home</Link>
      </li>
      <li class="nav-item">
      <Link className="homie"  to='/Company'>Company</Link>
      </li>
      <li class="nav-item">
      <Link className="homie" to='/Products'>Products</Link>
      </li>
      <li class="nav-item">
      <Link className="homie" to='/Services'>Services</Link>
      </li>
      {/* <li class="nav-item">
      <Link to='/Sms'>Voice & SMS</Link>
      </li> */}
      <li class="nav-item">
      <Link className="homie" to='/Events'>Events</Link>
      </li>
      <li class="btn-lts">
        <button className="btnc">
        <a class="letsa" href="https://iconnectglobal.com/">Lets's Connect</a>
        </button>
       
      </li>
      <li>
      {/* <div class="hamburger-menu" id="hamburger-menu">
       <div class="menu-bar1"></div>
      <div class="menu-bar2"></div>
      <div class="menu-bar3"></div>
      </div> */}
      </li>
      <li>
      {/* <ReactNavbar /> */}
      </li>
    </ul>
  </div>
</nav>
</div>


   </section>
   <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
         <div className="container">
         <div className="row">
          <div className="col-lg-4">
           <h2>pakistab</h2>
          </div>
          <div className="col-lg-4">
          <h2>pakistab</h2>
            </div>
            <div className="col-lg-4">
            <h2>pakistab</h2>
            </div>
         </div>
         </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
export default Navbar;
