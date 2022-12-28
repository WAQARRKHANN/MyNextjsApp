import React from 'react'
import img_meet from './images/hnd.png'

const Meet = () => {
  return (
    <>
    <section className='meet_sec'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-4'>
            <div data-aos="fade-left" className='meet_cnt'>
                <h2>
                Thirty Years <br></br>
                 Of Experience
                </h2>
            </div>
        </div>
        <div className='col-lg-4 col-md-4 col-4 meet_img_col'>
            <div data-aos="zoom-out-up" className='meet_img'>
                <img src={img_meet} />
            </div>
        </div>
        <div className='col-lg-4 col-md-4 col-4'>
        <div data-aos="fade-right" className='meet_cnt'>
                <h2>
                Seasoned <br></br>
                Professionals
                </h2>
            </div>
        </div>
      </div>

    </div>
    </section>
    
    </>
  )
}

export default Meet