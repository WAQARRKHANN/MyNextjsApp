import React from 'react'
import telra from './images/arecp.webp'
import orng from './images/eu.webp'
import  thm from './images/orcle.webp'
import mob9 from './images/pasha.webp'
import tim from './images/pise.webp'
import glo from './images/istqb1.webp'
import dun from './images/dun1.webp'
import pm from './images/pmp1.webp'

const Certified = () => {
  return (
    <>
    <div className='container hglits'>
  <div className='heading_o'>
    <h2>
      Highlights
    </h2>
  </div>
<div className='row'>
<div className='col-lg-4 col-md-4 col-12'>
<div className='hightlits_hdg'>
<div className='text_lits'>
  <h6>founded</h6>
  <div className='sinc0'>
    <p>2015</p>
  </div>
</div>
</div>
</div>
<div className='col-lg-4 col-md-4 col-12'>
<div className='hightlits_hdg'>
<div className='text_lits'>
  <h6>happy customers</h6>
  <div className='sinc1'>
    <p>5k+</p>
  </div>
</div>
</div>
</div>
<div className='col-lg-4 col-md-4 col-12'>
<div className='hightlits_hdg'>
<div className='text_lits'>
  <h6>POP</h6>
  <div className='sinc2'>
    <p>france - singapore - uae - pakistan</p>
  </div>
</div>
</div>
</div>
</div>
<div className='row mnb'>
  <div className='col-lg-3 col-md-3 col-12'></div>
  <div className='col-lg-3 col-md-3 col-12'>
  <div className='hightlits_hdg'>
<div className='text_lits'>
  <h6>Certified by</h6>
  <div className='sinc3'>
    <p>duns and bradstreet</p>
  </div>
</div>
</div>
  </div>
  <div className='col-lg-3 col-md-3 col-12'>
  <div className='hightlits_hdg'>
<div className='text_lits'>
  <h6>Covered by</h6>
  <div className='sinc4'>
    <p>euler hermes</p>
  </div>
</div>
</div>
  </div>
  <div className='col-lg-3 col-md-3 col-12'></div>
</div>
</div>
      <div className='container'>
    <div data-aos="zoom-out-upp" className='clients_text'>
        <h2 className='animate-charcter'>
         our <span className='affition'>affiliations</span> 
        </h2>
    </div>
    <div data-aos="zoom-out-up" className='certi_logo'>
        <li className='cer-lgo'>
            <img src={telra} />
        </li>
        <li className='cer-lgo'>
            <img src={orng} />
        </li>
        <li className='cer-lgo'>
            <img src={thm} />
        </li>
        <li className='cer-lgo'>
            <img src={mob9} />
        </li>
        <li className='cer-lgo'>
            <img src={tim} />
        </li>
        <li className='cer-lgo'>
            <img src={glo} />
        </li>
        <li className='cer-lgo'>
            <img src={dun} />
        </li>
        <li className='cer-lgo'>
            <img src={pm} />
        </li>
    </div>
   </div>
   
    </>
  )
}

export default Certified