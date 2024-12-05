import React from "react";
import "./../index.css";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaBehance, FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container  p_120">
          <div className="row">
            <div className="col-lg-3  col-md-6 ">
              <h4 className="heading mt-5">About Agency </h4>
              <p className="footerpara mt-4">
                The world has become so fast paced that people don’t want to
                stand by reading a page of information, they would much rather
                look at a presentation and understand the message. It has come
                to a point
              </p>
            </div>
            <div className="col-lg-3  col-md-6 ">
              <h4 className="heading mt-5">Navigation Links</h4>
              <div className="row">
                <div className="col-4">
                  <ul class="list">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Feature</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul class="list">
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-6">
              <h4 className="heading mt-5">Newsletter</h4>
              <p className="footerpara mt-5">
              For business professionals caught between high OEM price and mediocre print and graphic output,
              </p>
              {/* <input type="text" className="input" placeholder="Enter Email" /> */}
              <input name="EMAIL" placeholder="Email Address " type="email"></input>
              {/* <button className="inputbtn"><CiLocationArrow1 /></button> */}
              <a href="" className="inputbtn"><CiLocationArrow1 /></a>
                
            </div>
            <div className="col-lg-3  col-md-6">
            <h4 className="heading mt-5">InstaFeed</h4>
            <div className="row py-4">
                <div className="col-lg-3 col-md-2 col-3  me-md-2 me-lg-0 mb-3 ">
                    <img src="img/instagram/Image-01.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-2 col-3  me-md-2 me-lg-0 mb-3">
                    <img src="img/instagram/Image-02.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-2 col-3  me-md-2 me-lg-0 mb-3">
                    <img src="img/instagram/Image-03.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-2 col-3  me-md-2 me-lg-0 mb-3">
                    <img src="img/instagram/Image-04.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-2 col-3  me-md-2 me-lg-0 mb-3">
                    <img src="img/instagram/Image-05.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-2 col-3  me-md-2 me-lg-0 mb-3">
                    <img src="img/instagram/Image-06.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-2 col-3  me-md-2 me-lg-0 mb-3">
                    <img src="img/instagram/Image-07.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-2 col-3  me-md-2 me-lg-0 mb-3">
                    <img src="img/instagram/Image-08.jpg" alt="" />
                </div>
            </div>
            </div>
          </div>
          <div className="footer-borber"></div>
          <div className="d-flex">
          <div className="last">Copyright ©2024 All rights reserved | This template is made with  by <a href="" >Colorlib</a> </div>
          <div className="left footicons mt-5 d-md-block  ms-auto d-none" inline>
            <ul>
                <li>
                    <a href="#home" className="text-secondary"><FaFacebookF/></a>
                </li>
                <li className='ms-4 '>
                    <a href="#home" className="text-secondary"><FaTwitter/></a>
                </li>
                <li className='ms-4 '>
                    <a href="#home" className="text-secondary"><FaDribbble/></a>
                </li>
                <li className='ms-4'>
                    <a href="#home" className="text-secondary"><FaBehance/></a>
                </li>
            </ul>
        </div>
          </div>
        </div>  
      </div>
    </>
  );
};

export default Footer;
