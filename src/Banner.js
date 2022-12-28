import React, { useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
// import logr from './images/logo-2.webp';
// import set from './images/entr-res.webp'
import backgrounde from "./images/crcle1.png";
import Cerficate from './Cerficate';
import background from "./images/us.png";
import backgrounds from "./images/frnch.png";



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
  <section  className='main_bg_petterne'>
 
  <div className='container main_bnr'>
 
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-6 cvb'>
      <div className='texte'>
    <h2>
    a partner for all your telecom needs
    </h2>
    {/* <p>iConnect – The ultimate workspace to connect, collaborate and grow!
                    </p> */}
       <div className='btn_k'>
      <a class="btn_1" href="">Learn More</a>
      </div>
      </div>
     </div>
     <div className='col-lg-6 col-md-6 col-6'>
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
      {/* <div className='text_img'>
       <img className='lg_img rotateme' src={logr} />
      </div> */}
     </div>
    </div>
  </div>
  <div className="">
      <img className='nb' src={backgrounde} />
      </div>  
      <Cerficate />
  </section>
 

  </>
  )
}

export default Banner;