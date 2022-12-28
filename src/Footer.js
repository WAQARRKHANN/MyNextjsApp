import React from 'react'
import logo from './images/ic.jpg'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className='footer_sec'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-2'>
                <div className='ftr_logo'>
                    <img src={logo} width="60%" />
                </div>
            </div>
            <div className='col-lg-2'>
               <div className='ftr_link'>
                <h6>About us</h6>
                <li>   <Link to='/Company'>Company</Link></li>
               <li>
               <Link to='/Company'>Management Team</Link>
               </li>
                
               </div>
            </div>
            <div className='col-lg-2'>  
            <div className='ftr_link'>
                <h6>Services</h6>
                <li>   <Link to='/Services'>Voice and SMS</Link></li>
               <li>
               <Link to='/Services'>Software</Link>
               </li>
                
               </div></div>
            {/* <div className='col-lg-2'>  
             <div className='ftr_link'>
                <h6>Community</h6>
                <li>   <a href=''>Workspace</a></li>
               <li>
               <a href=''>Membership</a>
               </li>
                
               </div>
               </div> */}
            <div className='col-lg-2'>  
            <div className='ftr_link'>
                <h6>Careers</h6>
                <li>  <Link to='/Career'>Careers in Iconnect</Link> </li>        
               </div></div>
            <div className='col-lg-2'> 
               </div>
            </div>
          
            <div className='row ftr_row'>
            <div className='col-lg-2'>
               
            </div>
            <div className='col-lg-2'>
               <div className='ftr_link'>
               
                <li>   <Link to='/Products'>Products</Link></li>
               <li>
               <Link to='/Events'>Blogs</Link>
               </li>
                
               </div>
            </div>
            <div className='col-lg-2'>  
            <div className='ftr_link'>
              
                <li>   <Link to='/Events'>News and events</Link></li>
               <li>
               <Link to='/Company'>Contact us</Link>
               </li>
                
               </div></div>
            <div className='col-lg-2'>  
           
               </div>
            <div className='col-lg-2'>  
           
               </div>
            <div className='col-lg-2'> 
               </div>
            </div>
          <div className='row ftr1_row'>
          < div className='col-lg-2 col-md-2 col-12'></div>
            < div className='col-lg-7 col-md-7 col-12'>
            <div className='privcy_div'>
                <li>
                <Link to='/Privacy'>Privacy Policy</Link>
                </li> <span className='slash'>|</span>
                <li>
                <Link to='/Cookies'>Cookies Policy</Link>
                </li>
             </div>
            </div>
            < div className='col-lg-3 col-md-3 col-12'>
            <div className='scl_menu'>
                    <div className='social-menu'>
                        <ul class="ul_social">
                            <li><a href="https://www.facebook.com/iconnectlimited" target="blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/iconnect.ltd/" target="blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/iconnect-tel/mycompany/" target="blank"><i class="fa fa-linkedin-square"></i></a></li>
                            <li><a href="https://twitter.com/Iconnect_ltd" target="blank"><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                   </div>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Footer