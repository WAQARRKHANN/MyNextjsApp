import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import cmp from "../images/yu (2).webp";
import tariq from "../images/6.png";
import khalid from "../images/7.png";
import ali from "../images/muhammad Ali.png";
import sardar from "../images/16 (2).png";
import adnan from "../images/17.png";
import zain from "../images/iconnect posts (35).png";
import baber from "../images/15 (2).png";
import mehr from "../images/21.png";
import mane from "../images/iconnect posts (28).png";
import stany from "../images/iconnect posts (32).png";
import nargis from "../images/12.png";
import neha from "../images/hr.jpg";
import usama from "../images/20.png";
import haider from "../images/19.png";
import amna from "../images/14 (2).png";
import haroon from "../images/26.png";
import aiza from "../images/27.png";
import waqar from "../images/22.png";
import irsa from "../images/15 (1).png";
import zeshan from "../images/zeshan.jpg";
import hamna from "../images/28.png";
import aimen from "../images/14 (1).png";
import saad from "../images/25.png";
import Ahsan from "../images/18 (1).png";
import Bannercmpny from "../Bannercmpny";
import amnas from "../images/amna ahmed khan.jpg";
import paris from "../images/paris.png";
import signpore from "../images/signapore.png";
import uae from "../images/uae.png";
import pak from "../images/pak_ades.png";
import Contact from "../Contact";

const Products = () => {
  return (
    <>
      <Navbar />
      <Bannercmpny />
      {/* <section className='main_bnr'>
      <div className='container'>
      <div className='compnay_bner_text'>
        <h2 data-aos="zoom-in" className='animate-charcter'>get to know <br></br>
          <span>
           us better.</span>
        </h2>
      </div>
      </div>
      <div className='compny_sec_2'>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6 col-md-6 col-6'>
          <div data-aos="fade-right" className='left_c_text'>
            <p>
              IConnect Limited is a blend of seasoned professionals with the experience of 30+ years in the Telecommunication and Information Technology Industry. Today, IConnect is not only adept at voice but has also prove its proficiency in software and app development.
            </p>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-6'>
          <div  className='right_c_img'>
            <img data-aos="fade-left" src={cmp} />
          </div>
          </div>
        </div>
        </div>
      </div>
    </section> */}

 
      <section className="team_sec">
        <div className="container">
        {/* <div class="MemberTitle">
                        <h2>It's all about</h2>
                        <div class="bar11"></div>
                        <h2>the people.</h2>
                        <div class="bar22"></div>
                    </div> */}
      <div className='text_o'>
    <h2>
  
    It's all about
    the people.
    </h2>
    </div>
          <div data-aoss="zoom-in" className="team_members">
            <div className="team_box">
              <li>
                <img src={tariq} />
                <div className="member_title">
                  <h6>Tariq Ismail</h6>
                  <p>CEO</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={khalid} />
                <div className="member_title">
                  <h6>Khalid Ismail</h6>
                  <p>COO</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={ali} />
                <div className="member_title">
                  <h6>Muhammad Ali</h6>
                  <p>FOUNDER</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={sardar} />
                <div className="member_title">
                  <h6>Sardar Saleem</h6>
                  <p>COO</p>
                </div>
              </li>
            </div>
            {/* <div className='team_box'>
          <li>
            <img src={adnan} />
            <div className='member_title'>
              <h6>Adnan Sharif</h6>
              <p>CTO</p>
            </div>
          </li>
          </div> */}
            <div className="team_box">
              <li>
                <img src={zain} />
                <div className="member_title">
                  <h6>Zain Shah</h6>
                  <p>President</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={mehr} />
                <div className="member_title">
                  <h6>Mehr Ali</h6>
                  <p>NOC Manager</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={baber} />
                <div className="member_title">
                  <h6>Babar Ali Khan</h6>
                  <p>Finance Manager</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={mane} />
                <div className="member_title">
                  <h6>Mane Malu</h6>
                  <p>Senior Account Manager</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={stany} />
                <div className="member_title">
                  <h6>Stanley Ezibuike</h6>
                  <p>Manager Strategy & Partnership</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={nargis} />
                <div className="member_title">
                  <h6>Narges Mokhtari</h6>
                  <p>Senior Account Manager</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={usama} />
                <div className="member_title">
                  <h6>Muhammad Usama</h6>
                  <p>Business Intelligence Anaylst</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img className="amans" src={amnas} />
                <div className="member_title">
                  <h6>Amna Ahmed Khan</h6>
                  <p>Business Intelligence Anaylst</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img className="neha" src={neha} />
                <div className="member_title ">
                  <h6>Neeha Khan</h6>
                  <p>Human Resource Manager</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={haider} />
                <div className="member_title">
                  <h6>Haider Ali</h6>
                  <p>Business Anaylst</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={amna} />
                <div className="member_title">
                  <h6>Amna Malik</h6>
                  <p>Senior Account Manager</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={haroon} />
                <div className="member_title">
                  <h6>Haroon Amjad</h6>
                  <p>Senior NOC Engineer</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={aiza} />
                <div className="member_title">
                  <h6>Aiza Tariq</h6>
                  <p>Finance Executive</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={waqar} />
                <div className="member_title">
                  <h6>Waqar Khan</h6>
                  <p>Front End Developer</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={irsa} />
                <div className="member_title">
                  <h6>Irsa Tanweer</h6>
                  <p>Finance Executive</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={zeshan} />
                <div className="member_title">
                  <h6>Zeeshan Ali</h6>
                  <p>Finance Executive</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={hamna} />
                <div className="member_title">
                  <h6>Hamna Javed </h6>
                  <p>Key Account Manager</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={saad} />
                <div className="member_title">
                  <h6>Saad Sohail </h6>
                  <p>Key Account Manager</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={aimen} />
                <div className="member_title">
                  <h6>Aimen Jawad </h6>
                  <p>NOC Engineer</p>
                </div>
              </li>
            </div>
            <div className="team_box">
              <li>
                <img src={Ahsan} />
                <div className="member_title">
                  <h6>Ahsan Khan </h6>
                  <p>NOC Engineer</p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>
      <section className="loction_sec">
        <div className="container">
          <div className="loctn_hedng">
            <h2>Our Locations</h2>
          </div>
          <div className="main_locatn_card">
            <div className="card_loction">
              <div className="kl">
                <img className="cntry_img pars" src={paris} />
                <h2>Paris, France</h2>
                <p>
                  12 Rue Greuze Paris 75116 France <br></br>P: + 33 (1) 87651931
                </p>
              </div>

              <div className="footer_direction">
                <div className="hdn">
                  <h6>Get Directions</h6>
                </div>
                <div className="hjn">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="card_loction">
              <div className="kl">
                <img className="cntry_img" src={signpore} />
                <h2>Singapore</h2>

                <p>
                  30 Cecil Street # 19-08 Prudential Tower <br></br>
                  049712 <br></br>P: +65 6809 7405
                </p>
              </div>

              <div className="footer_direction">
                <div className="hdn">
                  <h6>Get Directions</h6>
                </div>
                <div className="hjn">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="card_loction">
              <div className="kl">
                <img className="cntry_img us" src={uae} />
                <h2>Ras Ul Khaimah, UAE</h2>
                <p>
                  MBAM0498 Service Block Al Jazirah Al Hamra Industrial Zone FZ,
                  P.O.Box 377310<br></br>PHONE: + 971 (0) 72078770
                </p>
              </div>

              <div className="footer_direction">
                <div className="hdn">
                  <h6>Get Directions</h6>
                </div>
                <div className="hjn">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="pak_addres">
            <div className="card_loction">
              <div className="kl">
                <img className="cntry_img" src={pak} />
                <h2>Islamabad, Pakistan</h2>
                <p>
                  Level 3, Skylona Building, Sheikh Zayed Bin Sultan Rd,near
                  Giga Mall Islamabad, 44000 <br></br>
                </p>
              </div>

              <div className="footer_direction">
                <div className="hdn">
                  <h6>Get Directions</h6>
                </div>
                <div className="hjn">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
