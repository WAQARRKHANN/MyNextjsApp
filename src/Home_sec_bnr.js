import React from 'react'
import img1 from './images/hom_bnnr.webp'


const Home_sec_bnr = () => {
  return (
   <>
    <section className='bnr_img_content'>
    <div className='container'>
       <div className='row'>
        <div data-aos="fade-right" className='col-lg-6 col-4 img_bnr'>
         <img className='mnl' src={img1} width="80%" />
        </div>
        <div data-aos="fade-left" className='col-lg-6 col-8  text_bnr'>
            <p>
         Iconnect teamed with seasoned professionals having more than thirty years of experience, Chapter started with voice and SMS services, and became the leading company for voice termination in Africa and Europe region. The company is also specialized in enterprise application software which is backed by advanced analytics technologies and artificial intelligence helping
businesses of all sizes gives the power to adapt business models and processes quickly so you can reduce costs, sharpen forecasts, and innovate more.
            </p>
        </div>
       </div>
    </div>
  </section>
   </>
  )
}

export default Home_sec_bnr; 