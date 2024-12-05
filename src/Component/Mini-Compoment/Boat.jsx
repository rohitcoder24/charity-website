import React from 'react'
import { CiUser } from 'react-icons/ci'
import { FaRegCalendarAlt, FaRegComment } from 'react-icons/fa'
import { LiaEyeSolid } from 'react-icons/lia'

const Boat = (props) => {
  return (
    <>
      <div className="row">
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
                          <LiaEyeSolid/>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        06 Comments
                        <i>
                          <FaRegComment/>
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-9  bg-light">
                  <img
                    src={props.imgsrc}
                    className="img-fluid blog-img"
                    alt=""
                  />
                  <h2 className="blog-text">
                    
                    {props.para}
        
                  </h2>
                  <p className="blog-para">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <button className="blog-btn">view more</button>
                </div>
              </div>
    </>
  )
}

export default Boat
