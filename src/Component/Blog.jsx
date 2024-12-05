import React from "react";
import { Pagination } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaRegCalendarAlt,
  FaRegComment,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { LiaEyeSolid } from "react-icons/lia";
import Blogpro from "./Blogpro";
import Boat from "./Mini-Compoment/boat";
import Sdata from "./Mini-Compoment/Api/Sdata";

const Blog = () => {
  return (
    <>
      <section className="bg-light">
        <div className="blog-main">
          <div className="container text-white">
            <div className="align-middle text-center text-blog ">
              <h1 className="">
                Dude You’re Getting <br />a Telescope
              </h1>
              <p className="text-white">
                There is a moment in the life of any aspiring astronomer that it
                is time to buy that first
              </p>
              <button className="btn-view"> View more</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4">
              <div className="img-blog">
                <img
                  src="img/blog/cat-post/cat-post-3.jpg"
                  className="img-fluid img-mins"
                  alt="aesgrhtjy"
                />
                <div className="uppercase text-center">
                  <h4 className="card-text">Social life</h4>
                  <div className="line-border"></div>
                  <p className="text-white">Enjoy your social life together</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-blog">
                <img
                  src="img/blog/cat-post/cat-post-2.jpg"
                  className="img-fluid img-mins"
                  alt="aesgrhtjy"
                />
                <div className="uppercase text-center">
                  <h4 className="card-text">politics</h4>
                  <div className="line-border"></div>
                  <p className="text-white">Be a part of Politics</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-blog">
                <img
                  src="img/blog/cat-post/cat-post-1.jpg"
                  className="img-fluid img-mins"
                  alt="aesgrhtjy"
                />
                <div className="uppercase text-center">
                  <h4 className="card-text">food</h4>
                  <div className="line-border"></div>
                  <p className="text-white">Let the Food be finished</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-8 mt-5 blog-area">
              {
                Sdata.map((val,ins) => {
                  return <Boat
                  key={val}
                  imgsrc={val.imgsrc}
                  para ={val.para}
                 />
                })

              }
              
              <div className=" d-flex justify-content-center mb-5">
              <div class="pagination">
                <a href="#"><FaArrowLeft />                </a>
                <a href="#">1</a>
                <a class="active" href="#">
                  2
                </a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">9</a>
                <a href="#"><FaArrowRight />
                </a>
              </div>
            </div>
            </div>
            <Blogpro/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
