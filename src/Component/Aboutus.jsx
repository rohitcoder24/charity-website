import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Welcome from './Welcome'
import Keys from './Keys'
import Testimonial from './Testimonial'
import Lastcause from './Lastcause'

const Aboutus = () => {
  return (
    <>
    <div className="gallary text-center mb-5">
        <h1>
            About US
        </h1>
        <div className='mt-4'>

        <a href="" className='me-2'>Home</a> <a href=""><FaArrowRight /></a> <a href=""className='ms-2'>About</a> 
        </div>


    </div>
    <Welcome/>
    <Keys/>
    <Testimonial/>
    <Lastcause/>

    </>
  )
}

export default Aboutus