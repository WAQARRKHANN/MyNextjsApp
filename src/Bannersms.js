import React, { useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import logr from './images/logo-2.webp';
import set from './images/entr-res.webp'



const Banner = () => {
  const myStyle={
    backgroundImage: "url('')",
    // height:'100vh',
    // marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
useEffect(() => {
  Aos.init({duration:1500});
},[]);
  return (
    
  <>
<section className='bnr_sm'>
  <div className='container c'>
    <div className='bn'>
    <h2>
      Voice
    </h2>
    </div>
    <div className='row'>
    <div className='col-lg-4 col-md-4 col-4 col_flex'>
  <div className='text_smsa'>
  
    <span className='ac'>3</span><span className='ac'>Billion</span><span className='av'>+</span>
  </div>
  </div>
  <div className='col-lg-4 col-md-4 col-4 col_flex'>
  <div className='texta_sms'>
    <p>mintues manually to</p>
  </div>
  </div>
  <div className='col-lg-4 col-md-4 col-4 col_flex'>
<div className='textb_sms'>
<span className='ac'>80</span><span className='av'>+</span><span className='ac'>Countries</span>
</div>
  </div>
    </div>

  </div>


</section>
 
 
  </>
  )
}

export default Banner;