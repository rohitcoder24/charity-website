import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { TbBuildingSkyscraper } from 'react-icons/tb'

const Eventdeli = () => {
  return (
    <>
    <div className="gallary text-center mb-5">
        <h1>Event Details</h1>
        <div className="mt-4">
          <a href="" className="me-2">
            Home
          </a>{" "}
          <a href="">
            <FaArrowRight />
          </a>{" "}
          <a href="" className="ms-2">
            Events
          </a>
          <a href="" className='ms-2'>
            <FaArrowRight />
          </a>{" "}
          <a href="" className="ms-2">
            Events Details
          </a>
          
        </div>
      </div>
      <div className="container">
        <div className="text-center">
        <img src="img/event/event-details.jpg" className='img-fluid mt-5' alt="dsfbg" srcset="" />
        </div>
        <div className="row Eventdeli ">
            <div className='col-lg-5 eventcol'>
           
           <a className=''> <MdOutlineCalendarMonth />Saturday, 5th may,</a>
           <a className='mt-3'><TbBuildingSkyscraper />Rocky beach church,</a>
           <a className='mt-3'><CiLocationArrow1 />Saturday, 5th may,</a>
            </div>
            <div className='col-lg-7  eventpara mt-5  mb-5'>
                <h3>Spreading Peace to world</h3>
                <p className='mt-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                <br className='d-lg-block d-none'></br> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br className='d-lg-block d-none'></br> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br className='d-lg-block d-none'></br> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate<br className='d-lg-block d-none'></br> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br className='d-lg-block d-none'></br> non proident. sunt in culpa qui officia deserunt mollit anim id est laborum. <br className='d-lg-block d-none'></br> Sed ut perspiciatis unde omnis iste natus.
                </p>
            </div>
        </div>
      </div>
      </>
  )
}

export default Eventdeli