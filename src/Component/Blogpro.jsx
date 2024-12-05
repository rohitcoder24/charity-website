import React from 'react'
import { FaBehance, FaFacebookF, FaGithub, FaSearch, FaTwitter } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Blogpro = () => {
  return (
    <>
    <div className="col-lg-4">
              <div className="border  ">
                <div className=" p-3 p-md-5 text-center">
                  <input
                    type="text"
                    className="inputsearch"
                    placeholder="Search Posts"
                  />
                  <button class="btn btn-default text-white" type="button">
                    <FaSearch />
                  </button>
                  <div className="line"> </div>
                </div>
                <div className="blog-pro">
                  <div className=" text-center">
                    <img src="img/blog/author.png" alt="dwfegrtn" />
                    <h3 className="mt-3 ">Charlie Barber</h3>
                    <p className="">Senior Blog Write</p>
                    <div className="icons">
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
                    <div className="px-5 mt-3">
                      <p>
                        Boot camps have its supporters andit sdetractors. Some
                        people do not understand why you should have to spend
                        money on boot camp when you can get. Boot camps have
                        itssuppor ters andits detractors.
                      </p>
                      <div className="line"> </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 mt-3">
                  <button className="btn-pop ">Popular posts</button>
                </div>
                <div class="d-flex px-4  blog-pop mt-5">
                  <div class="flex-shrink-1">
                    <img src="img/blog/popular-post/post1.jpg" alt="..." />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>Space The Final Frontier</h3>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div class="d-flex px-4  blog-pop mt-3">
                  <div class="flex-shrink-1">
                    <img src="img/blog/popular-post/post2.jpg" alt="..." />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>The Amazing Hubble</h3>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div class="d-flex px-4  blog-pop mt-3">
                  <div class="flex-shrink-1">
                    <img src="img/blog/popular-post/post3.jpg" alt="..." />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>Astronomy Or Astrology</h3>
                    <p>03 Hours ago</p>
                  </div>
                </div>
                <div class="d-flex px-4  blog-pop mt-3">
                  <div class="flex-shrink-1">
                    <img src="img/blog/popular-post/post4.jpg" alt="..." />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>Asteroids telescope</h3>
                    <p>01 Hours ago</p>
                  </div>
                </div>
                <div className="px-5">
                  <div className="line"> </div>
                </div>
                <div className="ad-here mt-5 text-center">
                  <img src="img/blog/add.jpg" alt="..." />
                </div>
                <div className="px-5">
                  <div className="line"> </div>
                </div>
                <div className="px-5 mt-3">
                  <button className="btn-pop ">
                    <b>Post Catgories</b>
                  </button>
                </div>
                <div>
                  <div className="px-4 mt-3">
                    <div className=" bor-bottom d-flex justify-content-between">
                      <p>Technology</p>
                      <p>37</p>
                    </div>
                  </div>
                  <div className="px-4 mt-3">
                    <div className=" bor-bottom d-flex justify-content-between">
                      <p>Lifestyle</p>
                      <p>24</p>
                    </div>
                  </div>
                  <div className="px-4 mt-3">
                    <div className=" bor-bottom d-flex justify-content-between">
                      <p>Fashion</p>
                      <p>59</p>
                    </div>
                  </div>
                  <div className="px-4 mt-3 ">
                    <div className=" bor-bottom d-flex justify-content-between">
                      <p>Art</p>
                      <p>29</p>
                    </div>
                  </div>
                  <div className="px-4 mt-3 ">
                    <div className=" bor-bottom d-flex justify-content-between">
                      <p>Food</p>
                      <p>15</p>
                    </div>
                  </div>
                  <div className="px-4  mt-3">
                    <div className=" bor-bottom d-flex justify-content-between">
                      <p>Architecture</p>
                      <p>09</p>
                    </div>
                  </div>
                  <div className="px-4 mt-2 ">
                    <div className=" bor-bottom d-flex justify-content-between">
                      <p>Adventure</p>
                      <p>44</p>
                    </div>
                  </div>
                </div>
                <div className="px-5">
                  <div className="line"> </div>
                </div>

                <div className="px-5 mt-3">
                  <button className="btn-pop ">
                    <b>Newsletter</b>
                  </button>
                </div>
                <div className="text-center px-5 mt-4">
                  <p>
                    Here, I focus on a range of items and features that we use
                    in life without giving them a second thought.
                  </p>
                </div>
                <div className="text-center">
                  <div className="input-group mb-3 px-5 text-center">
                    <span className="input-group-text border border-end-0 mail-bok">
                      <IoMail />
                    </span>
                    <input
                      type="text"
                      className="form-control  border border-start-0"
                    />
                    <button className="btu-sub">Subcibe</button>
                  </div>
                  <p className="">You can unsubscribe at any time</p>
                </div>
                <div className="px-5">
                  <div className="line"> </div>
                </div>
                <div className="px-5 mt-3">
                  <button className="btn-pop ">
                    <b>Tag Clouds</b>
                  </button>
                </div>
                <div className="mt-4 mb-5">
                  <button className="btn-mini">Technology</button>
                  <button className="btn-mini">Fashion</button>
                  <button className="btn-mini">Architecture</button>
                  <button className="btn-mini">Fashion</button>
                  <button className="btn-mini">Food</button>
                  <button className="btn-mini">Technology</button>
                  <button className="btn-mini">Lifestyle</button>
                  <button className="btn-mini">Art</button>
                  <button className="btn-mini">Adventure</button>
                  <button className="btn-mini">Food</button>
                  <button className="btn-mini">Lifestyle</button>
                  <button className="btn-mini">Adventure</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default Blogpro