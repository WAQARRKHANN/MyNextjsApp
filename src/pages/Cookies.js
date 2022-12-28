import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Cookies = () => {
  return (
    <>
       <Navbar />
    <section className='cookies_baner_sec'>
        <div className='container'>
            <div className='cookie_text_baner'>
                <h2 className='animate-charcter'>Cookies Policy</h2>
            </div>
        </div>
    </section>
    <section className='cookies_content_sec'>
        <div className='container cookie_container'>
            <div className='cookies_text_list'>
               <div className='list_cookies'>
                <h2>What are cookies?</h2>
                 <p>Please note that our website employs the use of cookies, that are referred to as mini files which are downloaded to your computer, in an attempt to enhance your overall experience. The following cookie policy will inform you regarding what particular information cookies gather, how that information is used and why often it is important for us to store these cookies. In addition to this, the policy will also reflect upon how you can prevent these cookies from being stored, however this may downgrade or break certain elements of the site’s functionality.</p>
               </div>
               <div className='list_cookies'>
                <h2>How do we utilize cookies?</h2>
                 <p>We may use cookies for several reasons, as mentioned below. However, considering the fact that there are no established industry standards pertaining to options for disabling cookies without completely disabling the functionality and features that they add to the site, we advise you that you leave all cookies on, in the case that you are not confident whether you need them or not because they might be in use to cater to one of your services.</p>
               </div>
               <div className='list_cookies'>
                <h2>How can you disable cookies?</h2>
                 <p>You can modify the setting of the cookies by adjusting the settings on your browser. Please note that disabling the cookies will impact the functionality of this and many other sites that you might visit. Disabling the cookies might also disable certain other functionality features of this and other sites. Therefore, we recommend you to not disable cookies.</p>
               </div>
               <div className='list_cookies'>
                <h2>What are the cookies we set?</h2>
                 <p>When you register yourself with IConnect officially, cookies will be used for the management of the signup process and general administration. These cookies will usually be deleted the moment you log out; however in some cases, they may remain afterwards to remember your site preferences when logged out.</p>
               </div>
               <div className='list_cookies'>
                <h2>Third party cookies</h2>
                 <p>In order to facilitate and upgrade your on-site experience, our IT experts, from time to time test out new features and make subtle changes to the way that the site is delivered. When they test certain features, the cookies may be employed in an attempt to ensure that you receive a consistent experience whilst on the site. In order to maintain the site’s functionality, it’s important for us to understand the statistics pertaining to how visitors browse through our site. Such type of data is tracked and saved by the cookies. This allows us to make accurate business predictions and enhance the overall experience for you.</p>
               </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
 
  )
}

export default Cookies