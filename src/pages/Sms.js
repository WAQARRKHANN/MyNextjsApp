import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import v1 from '../images/vs-1.webp'
import v2 from '../images/vs-2.webp'
import v3 from '../images/vs-3.webp'
import Bannersms from '../Bannersms';

const Products = () => {
  return (
    <>
    <Navbar />
    <Bannersms />
 {/* <section className='sms_sec main_bnr'>
  <div className='container'>
    <div className='sms_banr_text'>
      <h2 data-aos="zoom-in" className='animate-charcter'>
        <span className='milion'>442 million <span className='plus'>+</span> </span> <br></br>
        <span className='mint'>minutes</span> <br></br>
        <span className='country'>40 <span className='plus'>+</span>  countries</span>
      </h2>
    </div>
  </div>
 </section> */}

 <section className='sms_sec'>
  <div className='container'>
    <div className='text_sms'>
      <h2>
      the impact of our services
      </h2>
    </div>
  </div>
 </section>
 <section className='sms_img_sec'>
  <div className='container'>
    <div data-aos="zoom-in" className='main_sms_img_list'>
     <div className='left_img_sms'>
      <img src={v1} />
     </div>
     <div className='rght_text_sms'>
      <h2>proprietary industry-leading monitoring and routing
          management system</h2>
     </div>
    </div>
    <div data-aos="zoom-in" className='main_sms_img_list'>
     <div className='left_img_sms'>
      <img src={v2} />
     </div>
     <div className='rght_text_sms'>
      <h2>proprietary industry-leading monitoring and routing
          management system</h2>
     </div>
    </div>
    <div data-aos="zoom-in" className='main_sms_img_list'>
     <div className='left_img_sms'>
      <img src={v3} />
     </div>
     <div className='rght_text_sms'>
      <h2>proprietary industry-leading monitoring and routing
           management system</h2>
     </div>
    </div>
  </div>
 </section>
    <Footer />
    </>
  )
}

export default Products