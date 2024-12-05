import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiArrowsOutSimpleBold, PiArrowsOutSimpleFill } from "react-icons/pi";

const Gall = () => {
  return (
    // sectionmain start
    <section>
      <div className="gallary text-center">
        <h1>Image Gallary</h1>
        <div className="mt-4">
          <a href="" className="me-2">
            Home
          </a>{" "}
          <a href="">
            <FaArrowRight />
          </a>{" "}
          <a href="" className="ms-2">
            Gallary
          </a>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-1.jpg" alt=""  className="img-fluid"/>
              <div className="gallery-minbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-2.jpg" alt=""  className="img-fluid"/>
              <div className="gallery-minbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-3.jpg" alt=""  className="img-fluid"/>
              <div className="gallery-minbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-4.jpg" alt=""  className="img-fluid long-img"/>
              <div className="gallery-minbox longbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-5.jpg" alt=""  className="img-fluid"/>
              <div className="gallery-minbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-6.jpg" alt=""  className="img-fluid long-img"/>
              <div className="gallery-minbox longbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-7.jpg" alt=""  className="img-fluid"/>
              <div className="gallery-minbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-8.jpg" alt=""  className="img-fluid"/>
              <div className="gallery-minbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-9.jpg" alt=""  className="img-fluid"/>
              <div className="gallery-minbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-10.jpg" alt=""  className="img-fluid long-img"/>
              <div className="gallery-minbox longbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-11.jpg" alt=""  className="img-fluid"/>
              <div className="gallery-minbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="img-box">
              <img src="img/gallery/gallery-12.jpg" alt=""  className="img-fluid long-img"/>
              <div className="gallery-minbox longbox">
                <PiArrowsOutSimpleFill />
              </div>
            </div>
          </div>

        </div>
        <div className="text-center">
          <button href="#" className="gall-btn mt-5 mb-5 px-5">
            Load More Image
          </button>
        </div>
      </div>
    </section>
    // sectionmain end
  );
};

export default Gall;
