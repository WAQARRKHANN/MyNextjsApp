import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Privacy = () => {
  return (
    <>
       <Navbar />
    <section className='cookies_baner_sec'>
        <div className='container'>
            <div className='cookie_text_baner'>
                <h2 className='animate-charcter'>Privacy Policy</h2>
            </div>
        </div>
    </section>
    <section className='cookies_content_sec'>
        <div className='container cookie_container'>
            <div className='cookies_text_list'>
            <div className='list_cookies'>
                 <p>At IConnect, one of our key priorities is the protection of your privacy and confidentiality, specifically pertaining to your personal data. The following privacy protection policy of IConnect will inform you regarding how we utilize and safeguard the information that you provide us and what steps you can take to safeguard your private affairs in the context of the services that we deliver.</p>
               </div>
               <div className='list_cookies'>
                <h2>Which personal data is collected by IConnect?</h2>
                 <p>We, at IConnect, firmly adhere to collecting only relevant data that is required in relation to the services being provided to you. The categories of the data are listed below:</p>
                    <ul>
                        <li>
                          Personal identification details: name, telephone number, email ID, postal address, account number etc.
                        </li>
                        <li>
                        Financial details: Bank details, usage amount, types of payment, nature of account etc.
                        </li>
                        <li>
                        Usage data: Products used, usage amount etc.
                        </li>
                    </ul>
               </div>
               <div className='list_cookies'>
                <h2>How does IConnect utilize your data?</h2>
                 <p>All your data is stored safely in our central digital database system which we then use accordingly to bring you information regarding our new products and services, inform you regarding any new developments and give you access to other offers or information. Please note that we treat this data as highly confidential and the use of this data will never be extended to any third party, without your consent. With regards to your personal data, it is conserved for as long as needed for the required purpose, which cannot in any case exceed 24 months from the end of our contractual relationship.</p>
               </div>
               <div className='list_cookies'>
                <h2>What are your legal rights and how you can use them?</h2>
                 <p>In accordance with Articles 15 to 22 of the GDPR, you have full right to access, amend or remove data which concerns you in any way. You also hold the right to request the transfer of the latter. You can prohibit the data processing or request the limitation thereof. You can request these rights at any point in time, by contacting our IT administrator on the following email ID: hello@iconnectglobal.com. Any request to exercise these rights must be accompanied by a photocopy of two different proof of identity (ID card, driver’s license etc.). You will receive a reply within one month of the reception of your request regarding the status of your request.</p>
               </div>
               <div className='list_cookies'>
                <h2>How does IConnect protect your data?</h2>
                 <p>We, at IConnect take all required steps to ensure secure and confidential processing of your data. Our specialized team of IT experts executes all appropriate technical and organizational measures in order to avoid loss, bad usage, alteration or deletion of data concerning you. These measures are modified depending on the level of sensitivity of the data treated and depending on the risk level that presents the treatment or its putting in place thereof. These measures may include, where appropriate:</p>
                    
                    <ul>
                        <li>
                          Pseudonymization and encryption of personal data.
                        </li>
                        <li>
                        The ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services.
                        </li>
                        <li>
                        The ability to restore availability and access to personal data in a timely manner in the event of a physical or technical incident.
                        </li>
                    </ul>
               </div>
            </div>
        </div>
    </section>

    <Footer />
    </>
  )
}

export default Privacy