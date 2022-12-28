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
  <section  className='main_bg_pettern'>
  <div className='container main_bnr'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-12 cvb'>
      <div className='text'>
    <h2>
    GET THE BEST
    VALUE WITH
    OUR PRODUCTS.
    </h2>

                    <div className='btn_k'>
      <a class="btn_1" href="https://iconnectglobal.com/">Get Started</a>
      </div>
      </div>
     
     </div>
     <div className='col-lg-6 col-md-6 col-12'>
<div className='crcl'></div>                
                       
     <div className='elementor-widget-container'>
                        <img className='mySlides shp2'src={set}/>
											 <img className='mySlides shp2' src="" alt=""/>     
               </div>
      <div className='text_img'>
       <img className='lg_img rotateme' src={logr} />
      </div>
     </div>
    </div>
    
  </div>
  </section>
 
 
  </>
  )
}

export default Banner;