import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import map from './images/map.png'



const Contact = () => {
const form = useRef();
 
const sendEmail = (e) => {
e.preventDefault();

  emailjs
  .sendForm
  ('service_emhc4pi', 
  'template_qna9437', 
  form.current, 
  'zkh8UWCjEx689Sopd')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};
 

  return (
   <>
<section className='contact-page-sec'>

    <div className='container'>
      {/* <div className='row'>
        <div className='col-md-4'>
          <div data-aos="zoom-in" className='contact-info'>
            <div className='contact-info-item'>
              <div className='contact-info-icon'>
                <i className='fas fa-map-marked'></i>
              </div>
              <div className='contact-info-text'>
                <h2>address</h2>
                <span>Level 3, Skylona Building, Sheikh Zayed Bin Sultan Rd, near GigaMall</span> 
                <span>Islamabad, 44000 </span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div className='col-md-4'>
          <div data-aos="zoom-in" className='contact-info'>
            <div className='contact-info-item'>
              <div className='contact-info-icon'>
                <i className='fas fa-envelope'></i>
              </div>
              <div className='contact-info-text'>
                <h2>E-mail</h2>
                <span>hello@iconnectglobal.com</span> 
            
              </div>
            </div>            
          </div>                
        </div>                
        <div className='col-md-4'>
          <div data-aos="zoom-in" className='contact-info'>
            <div className='contact-info-item'>
              <div className='contact-info-icon'>
                <i className='fas fa-clock'></i>
              </div>
              <div className='contact-info-text'>
                <h2>office time</h2>
                <span>Mon - Thu  9:00 am - 6.00 pm</span>
                <span>Wed - Fri  10.00 pm - 7.00 pm</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div> */}
      <div className='row'>
        <div className='col-md-8 lke'>
          <div className='contact-page-form'>
            <h2 className='animate-charcter'>Get in touch </h2> 
            <h6 className='animate-charcter'>Send us a message and we will get back to you shortly</h6> 
           {/* <h6>The next step is to go on a tour of our workspace.<br></br> We 'll help find the perfect space and membership for you.</h6> */}

            {/* <form ref={form} onSubmit ={sendEmail}>
              <div className='row'>
              <div className='col-md-6 col-sm-6 col-xs-12'>
                <div className='single-input-field'>
                  <input type="text" placeholder="Your Name" name="user_name" required/>
                </div>
              </div>  
              <div className='col-md-6 col-sm-6 col-xs-12'>
                <div className='single-input-field'>
                  <input type="email" placeholder="E-mail" name="user_email" required/>
                </div>
              </div>                              
              <div className='col-md-6 col-sm-6 col-xs-12'>
                <div className='single-input-field'>
                  <input type="number" placeholder="Phone Number" name="phone" required/>
                </div>
              </div>  
              <div className='col-md-6 col-sm-6 col-xs-12'>
                <div className='single-input-field'>
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div className='col-md-12 message-input'>
                <div className='single-input-field'>
                  <textarea  placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div className='single-input-fieldsbtn'>
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
            </form>    */}
          </div>      
        </div>
        <div className='col-md-4'>  
 <div className='df'>
 <h2>I'M INTERESTED IN</h2> 
 </div>
        <div className='buttns'>
         
          <div className='chckd_btns'>
          <input type="radio" name="size" id="size_1" value="small" checked />
         <label for="size_1"></label><h6>Voice</h6>
          </div>
          <div className='chckd_btns'>
          <input type="radio" name="size" id="size_2" value="small" />
          <label for="size_2"></label><h6>SMS</h6>
          </div>
            <div className='chckd_btns'>
            <input type="radio" name="size" id="size_3" value="small" />
            <label for="size_3"></label> <h6>Software Services</h6>
          </div>
          </div>     
<form ref={form} onSubmit ={sendEmail}>

     <div className='frm-hdng'>
     WHAT'S YOUR EMAIL?
     </div>
               <div className='single-input-field'>
                  <input type="email" placeholder="E-mail" name="user_email" required/>
                </div>
                <div className='single-input-fieldsbtn'>
                <input type="submit" value="Send Now"/>
              </div>
                                         
             
             
            
            </form>   


          {/* <div data-aos="zoom-in" className='contact-page-map'>
           <img src={map} />
          </div>           */}
        </div>        
      </div>
    </div>
  </section>
  
   </>
  )
}

export default Contact;