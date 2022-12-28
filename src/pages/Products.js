import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import integrili from '../images/padlock-old.png';
import human from '../images/abt-_sec-img.webp';
import salon from '../images/salon.webp';
import hotel from '../images/hotel.webp';
import clinic from '../images/clicnic.webp';
import enterpric from '../images/entr-res.webp';
import biling from '../images/dlor (1).webp';
import insurance from '../images/dlor (2).webp';
import transport from '../images/dlor (3).webp';
import Bannerprodct from '../Bannerprodct';


const Products = () => {
  return (
    <>
    <Navbar />
    <Bannerprodct />

    {/* <div className='container main_bnr'>
      <div className='product_baner'>
        <h2 data-aos="zoom-in" className='animate-charcter'>
          <span className='get_best'>get the best</span> <br></br>
          <span className='value_with'>value with</span><br></br>
          <span className='our_product'>our products.</span>
        </h2>
      </div>
    </div> */}
    <section className='product_sec'>
      <div className='container'>
        <div className='content_product'>
           <div className='lft_content'>
            <h6 data-aos="fade-right">
            IConnect Limited presents a wide variety of business solutions under its brand Integrili. We have created Integrili with the intention of providing 360 degree enablement to suit all your company needs.
            </h6>
           </div>
           <div className='rght_content'>
            <img data-aos="fade-left" src={integrili} width="100%" />
           </div>
        </div>
      </div>
    </section>

    <section className='service_product_sec'>
      <div className='container'>
        <div className='main_ser_product'>
          <div className='product_ser_img'>
            <img data-aos="fade-right" src={human} />
          </div>
          <div data-aos="fade-left" className='product_ser_text'>
            <h2>Human Capital <span className='not_all'>Management</span>  <br></br>
                 System</h2>
            <h6>
            A comprehensive suite of cloud-based human capital management (HCM) software that brings out the best in your firm's efficiency and at the same time, enriches its cultural practices. Make educated and informed decisions with real time statistics so you are connected and in-sync with everyone, every time.
            </h6>
            </div>
        </div>
        <div className='main_ser_product'>
          <div className='product_ser_img'>
            <img data-aos="fade-right" src={hotel} />
          </div>
          <div data-aos="fade-left" className='product_ser_text'>
            <h2>Hotel <span className='not_all'>Management</span> <br></br>
                System</h2>
            <h6>
            A cloud based integrated hospitality solution to streamline administrative processes to facilitate memorable pleasant experiences. Automate major hotel operations regardless of the size of the hotel.
            </h6>
            </div>
        </div>
        <div className='main_ser_product'>
          <div className='product_ser_img'>
            <img data-aos="fade-right" src={clinic} />
          </div>
          <div data-aos="fade-left" className='product_ser_text'>
            <h2>Clinic <span className='not_all'>Management</span> <br></br>
                System</h2>
            <h6>
              Manage all aspects of a medical clinic's operations such as medical, financial, administrative, legal, and compliance. The system includes electronic health records, business intelligence, and revenue cycle management. Make booking, scheduling, billing and staff management easier than ever.
            </h6>
            </div>
        </div>
        <div className='main_ser_product'>
          <div className='product_ser_img'>
            <img data-aos="fade-right" src={salon} />
          </div>
          <div data-aos="fade-left" className='product_ser_text'>
            <h2>Salon <span className='not_all'>Management</span> <br></br>
                 System</h2>
            <h6>
            Your digital solution business partner specifically designed to focus on automation, booking, scheduling, PoS and strengthening customer relationships.
            </h6>
            </div>
        </div>
        <div className='main_ser_product'>
          <div className='product_ser_img'>
            <img data-aos="fade-right" src={enterpric} />
          </div>
          <div data-aos="fade-left" className='product_ser_text'>
            <h2>Enterprise Resource <span className='not_all'>Planning</span> <br></br>
                System</h2>
            <h6>
              Custom-designed, user-friendly, effective ERP solution for your businesses. We have an extensive experience in developing ERP solutions for multiple business domains and we know how to help you succeed.
            </h6>
            </div>
        </div>
      </div>
    </section>
    <section className='offer_sec'>
      <div className='container'>
        <div data-aos="zoom-in" className='offr_hding'>
          <h2 className='animate-charcter'>That's <span className='not_all'> not all!</span> <br></br>
              we also offer</h2>
        </div>
        <div className='offer_img'>
          <li>
            <img data-aos="zoom-in" src={biling}/>
             <h2>Billing Mangement <br></br>
                 System</h2>
          </li>
          <li>
            <img data-aos="zoom-in" src={insurance}/>
             <h2>Insurance Lead <br></br>
                  Generation</h2>
          </li>
          <li>
            <img data-aos="zoom-in" src={insurance}/>
             <h2>Bus Transport  <br></br>
                Management System</h2>
          </li>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Products