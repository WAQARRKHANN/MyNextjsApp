import React from 'react'
import Navbar from './Navbar';
import Home_sec_bnr from './Home_sec_bnr';
import Meet from './Meet';
import Certified from './Certified';
import Contact from './Contact';
import Footer from './Footer';
import Banner from './Banner';
import Bannercirlc from './Bannercirlc';
const Home = () => {
  return (
<>
<Navbar />
<Banner />
{/* <Home_sec_bnr /> */}
<Meet />
<Certified />
<Contact />
<Footer />
 </>
  )
}

export default Home;