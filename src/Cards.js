import React from 'react'
import frme from './images/frame-2.webp';

const Cards = () => {
  return (
   <>
   <div className='container'>
    <a>
        <div className='main_bg'>
            <div className='child_img'>
            <img className='frm_img' src={frme}/>
            </div>
           
        </div>
        <div class="Box-sc-ngw9bv-0 bALrUM card">
                      <span class="Text-sc-10y1tub-0 bGWUXv">our services</span>
                      <h3 class="Text-sc-10y1tub-0 H3-sc-1hh8sfr-0 evsYul">
                      TOP OF THE LINE SERVICES.<span
                          className="Text-sc-10y1tub-0 fdnMdU"
                          >.</span
                        >
                      </h3>
                      <span className="Text-sc-10y1tub-0 iZHVtV"
                        >Web Developemnt •
                        Apps Developemnt •
                       Al development •
                      Robotic Automation</span><span className="Text-sc-10y1tub-0 dhpzAn" >View case
                        <div
                          aria-hidden="true"
                          className="Box-sc-ngw9bv-0 Icon__StyledIcon-sc-17b0poh-0 bzFSH iBJBfQ"
                        >
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#arrow-right_svg__clip0)">
                              <path
                                d="M9.737 1.712l-.884.889a.541.541 0 000 .762l6.925 6.97H.536A.537.537 0 000 10.87v1.258c0 .298.24.539.536.539h15.242l-6.925 6.969a.541.541 0 000 .762l.884.89c.209.21.548.21.757 0l9.35-9.408a.542.542 0 000-.762l-9.35-9.407a.533.533 0 00-.757 0z"
                                fill="#000"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="arrow-right_svg__clip0">
                                <path fill="#fff" d="M0 0h20v23H0z"></path>
                              </clipPath>
                            </defs>
                          </svg></div
                      ></span></div>
    </a>
   </div>
   </>
  )
}

export default Cards