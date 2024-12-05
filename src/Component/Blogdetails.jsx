import React from "react";
import { CiUser } from "react-icons/ci";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaRegCalendarAlt,
  FaRegComment,
  FaTwitter,
} from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import Blogpro from "./Blogpro";

const Blogdetails = () => {
  return (
    <>
      <section className="bg-light">
        <div className="gallary text-center">
          <h1>Donation</h1>
          <div className="mt-4">
            <a href="" className="me-2">
              Home
            </a>{" "}
            <a href="">
              <FaArrowRight />
            </a>{" "}
            <a href="" className="ms-2">
              Blog Detalils
            </a>
            <a href="">
              {" "}
              <FaArrowRight />
            </a>{" "}
            <a href="" className="ms-2">
              Donation
            </a>
          </div>
        </div>
        <div className="container py-5">
          <div className="row mt-5">
            <div className="col-lg-8">
              <img
                src="img/blog/feature-img1.jpg"
                className="blogdel-img"
                alt=""
              />
              <div className="row mt-5">
                <div className="col-md-3  blog-left">
                  <div>
                    <a className="text-left-blog" href="">
                      Food,{" "}
                    </a>
                    <a className="text-left-blog" href="">
                      <span className="active">Technology, </span>
                    </a>

                    <a className="text-left-blog" href="">
                      Politics,{" "}
                    </a>
                    <a className="text-left-blog" href="">
                      Lifestyle,{" "}
                    </a>
                  </div>
                  <ul className="meta-list">
                    <li>
                      <a href="">
                        Mark wiens{" "}
                        <i>
                          <CiUser />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        12 Dec, 2017
                        <i>
                          <FaRegCalendarAlt />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        1.2M Views
                        <i>
                          <LiaEyeSolid />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        06 Comments
                        <i>
                          <FaRegComment />
                        </i>
                      </a>
                    </li>
                  </ul>
                  <div className="icons icons-color">
                    <a href="">
                      {" "}
                      <FaFacebookF />
                    </a>
                    <a href="">
                      <FaTwitter />{" "}
                    </a>
                    <a href="">
                      {" "}
                      <FaGithub />
                    </a>
                    <a href="">
                      <FaBehance />
                    </a>
                  </div>
                </div>
                <div className="col-md-9  bg-light">
                  <h2 className="blog-text">
                    Astronomy Binoculars A Great Alternative
                  </h2>
                  <p className="blog-para">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <p className="blog-para">
                    Boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually sit through a
                    self-imposed.
                  </p>
                  <p className="blog-para">
                    Boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually sit through a
                    self-imposed.
                  </p>
                  <button className="blog-btn">view more</button>
                </div>
              </div>
              <div className="bg-white p-5">
                <i>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training.
                  </p>
                </i>
              </div>
              <div className="row">
                <div className="col-6">
                  <img
                    src="img/blog/post-img1.jpg"
                    alt=""
                    srcset=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="img/blog/post-img2.jpg"
                    alt=""
                    srcset=""
                    className="img-fluid"
                  />
                </div>
                <p className="mt-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower.
                </p>
                <p className="mt-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower.
                </p>

                <div className="">
                  <div className="line"> </div>
                </div>
                  <div className="  mt-5 d-flex justify-content-between ">
                    <div className=" ">
                      <div class="d-flex">
                        <div class="img-post">
                          <img
                            src="img/blog/prev.jpg"
                            alt="..."
                            className="img-fluid "
                          />
                        <div className="arrow-img">
                          <FaArrowLeft />
                        </div>
                        </div>
                        <div class=" ms-4">
                          <p className="m-0">prev Post</p>
                          <h4 className="m-0">Space The Final Frontier</h4>
                        </div>
                      </div>
                    </div>
                    <div className="  d-flex-end ">
                      <div class="d-flex">
                        <div class="  me-4">
                          <p className="m-0">next Post</p>
                          <h4 className="m-0">Telescopes 101
                          </h4>
                        </div>
                         <div class="img-post ">
                          <img
                            src="img/blog/next.jpg"
                            alt="..."
                            className="img-fluid"
                          />
                        <div className="arrow-img">
                          <FaArrowRight />
                        </div>
                        </div>

                      </div>
                    </div>
                  </div>
              
              </div>
              <div className=" mt-5 border bg-white Comment">
                <div className="text-center">
                  <h4 className="py-5">05 Comment</h4>
                </div>
                <div className="d-flex ">
                  <div className="comment-left">
                    <img src="img/blog/c1.jpg" alt="sadvfbg" className="" />
                  </div>
                  <div className="comment-content ms-3">
                    <h4 className="m-0 comment-name">Emilly Blunt</h4>
                    <p className="comment-para">December 4, 2017 at 3:12 pm</p>
                    <span className="">
                      Never say goodbye till the end comes!
                    </span>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-comment">Reply</button>
                  </div>
                </div>
                <div className="d-flex mt-5  ms-4">
                  <div className="comment-left">
                    <img src="img/blog/c2.jpg" alt="sadvfbg" className="" />
                  </div>
                  <div className="comment-content ms-3">
                    <h4 className="m-0 comment-name">Elsie Cunningham</h4>
                    <p className="comment-para">December 4, 2017 at 3:12 pm</p>
                    <span className="">
                      Never say goodbye till the end comes!
                    </span>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-comment">Reply</button>
                  </div>
                </div>
                <div className="d-flex mt-5  ms-4">
                  <div className="comment-left">
                    <img src="img/blog/c3.jpg" alt="sadvfbg" className="" />
                  </div>
                  <div className="comment-content ms-3">
                    <h4 className="m-0 comment-name">Annie Stephens</h4>
                    <p className="comment-para">December 4, 2017 at 3:12 pm</p>
                    <span className="">
                      Never say goodbye till the end comes!
                    </span>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-comment">Reply</button>
                  </div>
                </div>
                <div className="d-flex mt-5 ">
                  <div className="comment-left">
                    <img src="img/blog/c4.jpg" alt="sadvfbg" className="" />
                  </div>
                  <div className="comment-content ms-3">
                    <h4 className="m-0 comment-name">Maria Luna</h4>
                    <p className="comment-para">December 4, 2017 at 3:12 pm</p>
                    <span className="">
                      Never say goodbye till the end comes!
                    </span>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-comment">Reply</button>
                  </div>
                </div>
                <div className="d-flex mt-5 ">
                  <div className="comment-left">
                    <img src="img/blog/c5.jpg" alt="sadvfbg" className="" />
                  </div>
                  <div className="comment-content ms-3">
                    <h4 className="m-0 comment-name">Ina Hayse</h4>
                    <p className="comment-para">December 4, 2017 at 3:12 pm</p>
                    <span className="">
                      Never say goodbye till the end comes!
                    </span>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-comment">Reply</button>
                  </div>
                </div>
              </div>
              <div className="border mt-5">
                <div className="text-center py-5">
                  <h5>Leave a Reply</h5>
                </div>
                <div className="row p-5">
                  <div class="form-group col-lg-6 col-md-6  mt-3name">
                  <input
                    type="text"
                    name="first_name"
                    placeholder=" Enter Name"
                    className="single-input "
                  ></input>
                  </div>
                  <div class="form-group col-lg-6 col-md-6  mt-3name">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter Email Address"

                    className="single-input"
                  ></input>
                  </div>
                  <div class="form-group col-md-12 mt-3 name">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Subject"
                    className="single-input"
                  ></input>
                  </div>
                  <textarea
                    class="single-textarea mt-4"
                    placeholder="Message"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Message'"
                    required=""
                  ></textarea>
                  <div className="mt-5 text-center">
                    <button className="comment-post-btn">
                      post Comment
                    </button>
                  </div>
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

export default Blogdetails;
