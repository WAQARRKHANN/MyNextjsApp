import React, { useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import logr from './images/logo-2.webp';
import set from './images/entr-res.webp'
import background from "./images/us.png";
import backgrounds from "./images/frnch.png";
import abot from './images/aboutuslogo-2.png'



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
  <section  className='main_bg_petterns'>
    <div className='container'>
     
      <div className='texts'>
    <h2>
  
    get to know 
    us better.
    </h2>
    </div>
      
    </div>
  <div className='container main_bnr'>

    <div className='row'>
   
    <div className='col-lg-7 col-md-6 col-6 cvb'>
      <div className='text'>
    <div className='cmpny_hding'>
      <h2>
      Our company
      </h2>
    </div>
    <p>Iconnect teamed with seasoned professionals having more than thirty years of experience, Chapter started with voice and SMS services, and became the leading company for voice termination in Africa and Europe region. The company is also specialized in enterprise application software which is backed by advanced analytics technologies and artificial intelligence helping
       businesses of all sizes gives the power to adapt business models and processes quickly so you can reduce costs, sharpen forecasts, and innovate more.
                    </p>
                    {/* <div className='btn_k'>
      <a class="btn_1" href="https://iconnectglobal.com/">Get Started</a>
      </div> */}
      </div>
     
     </div>
     <div className='col-lg-5 col-md-6 col-6 cmpy_col_2'>
     <div className="sl-nav">
      <ul>
        <li><b className='eng'>English(United State)</b> <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div class="triangle"></div>
          <ul>
            <li><i className="sl-flag flag-de" style={{ backgroundImage: `url(${background})` }}><div id="german"></div></i> <span className="active eng">English</span></li>
            <li><i className="sl-flag flag-austria" style={{ backgroundImage: `url(${backgrounds})` }}><div id="austri" ></div></i> <span className='eng'>French</span></li>
          </ul>
        </li>
      </ul>
    </div>                      
                       
     {/* <div className='elementor-widget-container'>
                        <img className='mySlides shp2'src={set}/>
											 <img className='mySlides shp2' src="" alt=""/>     
               </div> */}
      <div className='text_img'>
       <img className='abut_img' src={abot} />
      </div>
     </div>
    </div>
    
  </div>

{/* <div className='container hglits'>
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
</div> */}

  </section>
 
 
  </>
  )
}

export default Banner;