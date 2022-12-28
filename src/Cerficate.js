import React from 'react'
import telra from './images/telstr.webp'
import orng from './images/orng.webp'
import  thm from './images/thm.webp'
import mob9 from './images/q9.webp'
import tim from './images/tim.webp'
import glo from './images/glo.webp'

const Cerficate = () => {
  return (
   <>
   <div className='container ty'>
    <div data-aoss="zoom-in"  className='clients_text'>
        <h2 className='animate-charcter'>
       trusted by companies all over the world<span className='love_us'></span> 
        </h2>
    </div>
    <div data-aoss="zoom-out-up" className='certi_logo'>
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
    </div>
   </div>
   </>
  )
}

export default Cerficate