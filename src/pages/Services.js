import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import web from '../images/web_dev.webp';
import app from '../images/y1.webp';
import robotic from  '../images/y4.webp';
import ai from '../images/y2.webp';
import Bannerserv from '../Bannerserv';
import Bannersms from '../Bannersms';

const Products = () => {
  return (
    <>
    <Navbar />
    <Bannerserv />
    <Bannersms />
     {/* <div className='container main_bnr'>
      <div className='service_bner_text'>
        <h2 data-aos="zoom-in" className='animate-charcter'>
          top of the line <br></br>
         <span className='ser_text'> services.</span> 
        </h2>
      </div>
     </div> */}
     <section className='service_sec'>
      <div className='container'>
        <div className='main_ser_container'>
          <div className='lft_ser_img'>
            <img data-aos="fade-right" src={web} />
          </div>
          <div data-aos="fade-left" className='rght_ser_text'>
             <h2>Web Development</h2>
             <h6>we specializes in website design and development services. We use the latest technology to create fast, responsive websites that look sharp on desktop and mobile devices.We are a team of Web Designers, Web Developers, Creative Graphic Designers, SEO and Digital Marketing experts, who work together to deliver quality services to our clients. We have a team of highly talented and professional designers and developers who have expert knowledge of the latest design trends. We create attractive, user-friendly, responsive and interactive websites which fit your business needs and exceed your requirements. </h6>
          </div>
        </div>
        <div className='main_ser_container'>
          <div className='lft_ser_img'>
            <img data-aos="fade-right" src={app} />
          </div>
          <div data-aos="fade-left" className='rght_ser_text'>
             <h2>Application Development</h2>
             <h6>We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformations enterprise-class solution, the company leads the entire mobile app development process. Our mobile app developers are well versed in several mobile development technologies like react native, flutter, and many other frameworks. We focus on app functionality, performance and user experience. We take the mobile development process to the next level by utilizing our in-house talented team of designers, mobile app developers, and project managers to deliver a unique and high quality product. </h6>
          </div>
        </div>
        <div className='main_ser_container'>
          <div className='lft_ser_img'>
            <img data-aos="fade-right" src={robotic} />
          </div>
          <div data-aos="fade-left" className='rght_ser_text'>
             <h2>Robotic Process Automation</h2>
             <h6>Engage your human resources in more sophisticated and challenging tasks. Our RPA services and solutions are here to alleviate the burden of repetitious tasks on your employees and transform your business process framework into an automated, intelligent enterprise system. Through RPA, you can outsource low-level, high volume tasks to fully automated software bots that can execute tasks at a faster rate and with more accuracy than your human workforce. With our RPA services, your employees can be more productive and focus on more complex projects. </h6>
          </div>
        </div>
        <div className='main_ser_container'>
          <div className='lft_ser_img'>
            <img data-aos="fade-right" src={ai} />
          </div>
          <div data-aos="fade-left" className='rght_ser_text'>
             <h2>Artificial Intelligence Development</h2>
             <h6>We help you integrate AI in your current infrastructure - you increase customer engagement, eliminate human errors and boost profits. Why do we do it? Because we love building innovative AI products and we love to see them in action. We have access to the latest and greatest AI tools. Our team is made up of people who have plenty of experience in AI development. We are professionals who love what we do and we are always on the lookout for new challenges, so if you are looking for a partner to help you solve a complex AI problem, let’s talk. </h6>
          </div>
        </div>
      </div>
     </section>
    <Footer />
    </>
  )
}

export default Products