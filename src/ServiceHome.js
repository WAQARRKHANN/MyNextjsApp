import React from 'react'
import img from './images/service.webp' 
import web from './images/web_dev.webp';
import app from './images/y1.webp';
import mangmnt from  './images/maganemnt.webp';
import ai from './images/ai.webp';


const ServiceHome = () => {
    
  return (
  <>
  <div data-aos="zoom-in" className='container'>
    <div className='heading_h2'>
        <h2 className='animate-charcter'>
        how we <span className='can_help'>can help</span> 
        </h2>
    </div>
   <div className='row'>
    <div  className='col-lg-6 col-md-6 col-12'>
    <div  className='main_services'>
     <div  className='child_service_img'>
        <img src={img}  width="100%"/>
        </div> 
        <div className='child_service_contnt'>
            <h2>Voice Termination</h2>
            <p>Voice Termination</p>
            <a href='#'>Learn More</a>
        </div> 
    </div>
    </div>
   <div className='col-lg-6 col-md-6 col-12'>
   <div className='main_services'>
     <div className='child_service_img'>
        <img src={app}  width="100%"/>
        </div> 
        <div className='child_service_contnt'>
            <h2>Web Development</h2>
            <p>Web Development</p>
            <a href='#'>Learn More</a>
        </div> 
    </div> 
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='main_services'>
     <div className='child_service_img'>
        <img src={app}  width="100%"/>
        </div> 
        <div className='child_service_contnt'>
            <h2>Application Development</h2>
            <p>Application Development</p>
            <a href='#'>Learn More</a>
        </div> 
    </div>
    </div>
   <div className='col-lg-6 col-md-6 col-12'>
   <div className='main_services'>
     <div className='child_service_img'>
        <img src={ai}  width="100%"/>
        </div> 
        <div className='child_service_contnt'>
            <h2>Robotic Process Automation</h2>
            <p>Robotic Process Automation</p>
            <a href='#'>Learn More</a>
        </div> 
    </div> 
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='main_services'>
     <div className='child_service_img'>
        <img src={ai}  width="100%"/>
        </div> 
        <div className='child_service_contnt'>
            <h2>AI Development</h2>
            <p>AI Development</p>
            <a href='#'>Learn More</a>
        </div> 
    </div>
    </div>
   <div className='col-lg-6 col-md-6 col-12'>
   <div className='main_services'>
     <div className='child_service_img'>
        <img src={mangmnt}  width="100%"/>
        </div> 
        <div className='child_service_contnt'>
            <h2>Management Solutions</h2>
            <p>Management Solutions</p>
            <a href='#'>Learn More</a>
        </div> 
    </div> 
    </div>
   </div>

  </div>
  </>
  )
}

export default ServiceHome;