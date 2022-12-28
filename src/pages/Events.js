import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar';
import Bannernews from '../Bannernews';
import a from '../events/middle-2019-2.png'
import b from '../events/eurpo-2019-event 1.png'
import c from '../events/europe 2018 2.png'
import d from '../events/GCCM_Oman_2019-min.jpg'
import e from '../events/GCCM Middle East 2018-min.jpg'
import office from '../events/2.jpg'
import getix from '../events/Gitex 2018_1-min.JPG'
import mdl from '../events/middle-2019-1.png'
import gtx from '../events/Gitex 2018-min.JPG'

const Products = () => {
  return (
    <>
    <Navbar />
    <Bannernews />
    {/* <section Name='event_bnr_sec main_bnr'>
      <div classNameName='container'>
        <div classNameName='event_bnr_text'>
          <h2 data-aos="zoom-in" classNameName='animate-charcter'>
          this is what's  <br></br>
          <span classNameName='happning'>happening.</span>
          </h2>
        </div>
      </div>
    </section> */}

    <section>
      <div className='container'>
      <div className="card-container">
    <div className="cardm">
      <p className="card-text">middle-2019</p>
      <img className="card-img" src={a} alt="spooky jack-o-lantern"/>
    </div>
    <div className="cardm">
      <p className="card-text">eurpo-2019-event</p>
      <img className="card-img" src={b} alt="hocus pocus decor"/>
    </div>
    <div className="cardm">
      <p className="card-text">europe 2018</p>
      <img className="card-img" src={c} alt="spider web"/>
    </div>
    <div className="cardm">
      <p className="card-text">GCCM_Oman_2019</p>
      <img className="card-img" src={d} alt="spooky forest"/>
    </div>
     <div className="cardm">
       <p className="card-text">GCCM Middle East 2018</p>
      <img className="card-img" src={e} alt="jack-o-lantern with witch hat"/>
    </div>
    <div className="cardm">
      <p className="card-text">Office</p>
      <img className="card-img" src={office} alt="dog in ghost costume"/>
    </div>
     <div className="cardm">
       <p className="card-text">Gitex</p>
      <img className="card-img" src={getix} alt="jack-o-lantern scarecrow"/>
    </div>
    <div className="cardm">
      <p className="card-text">Middle 2019</p>
      <img className="card-img" src={mdl} alt="spooky skeleton screaming"/>
    </div>
     <div className="cardm">
       <p className="card-text">Gitex</p>
      <img className="card-img" src={gtx} alt="spooky street at night"/>
    </div>
  </div>
      </div>
  
    </section>
    <Footer />
    </>
  ) 
}

export default Products