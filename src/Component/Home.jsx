import React from 'react'
import { FiDatabase, FiUsers } from 'react-icons/fi'
import { GiBlackBook } from 'react-icons/gi'
import Causes from './Causes'
import Keys from './Keys'
import Upcoming from './Upcoming-Events'
import Testimonial from './Testimonial'
import Lastcause from './Lastcause'
import Welcome from './Welcome'

const Home = () => {
  return (
    <>
    {/* home section start */}
    <section >
    <div className="">
      <div className='home'>
        <div className="container">
          <div v className="text-center para text-white">
<h5>We need your Help to serve the people</h5>
<h3>Help for victims affcted by flood</h3>
<p className='white'>If you are looking at blank cassettes on the web, you may be very confused at the <br></br> difference in price. You may see some for as low as $.17 each.</p>
<div className="p-5">
<a className="main_btn" href="#">Donate Now</a>
<a className="white_btn ms-md-2 mt-3 mt-md-0" href="#">View Activity</a>
</div>

          </div>
        </div>
      </div>
    </div>
    <div className="container text-white">
    <div className="row cards">
      <div className="col-lg-4 mb-5 ">
       
        <div className="card1 yellow" >
          <div className="main-box ">
            <div className="row">
              <div className="col-9 right-border">
              <h4  className='font'>Total Donation</h4>
              <p className='para-light'>The French Revolutioncons tituted for the conscience of the dominant.</p>
              </div>
              <div className="col-3 ruppes">
                <h3 className='ruppes'>$2.5M</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-5 ">
       
        <div className="card1 pink" >
          <div className="main-box ">
            <div className="row">
              <div className="col-9 right-border ">
              <h4 className='font'>Total Volunteers</h4>
              <p className='para-light'>The French Revolutioncons tituted for the conscience of the dominant.</p>
              </div>
              <div className="col-3 ruppes">
                <h3 className='ruppes'>3268</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-5 ">
       
        <div className="card1 green" >
          <div className="main-box ">
            <div className="row">
              <div className="col-9 right-border">
              <h4  className='font'>Future Plans</h4>
              <p className='para-light'>The French Revolutioncons tituted for the conscience of the dominant.</p>
              </div>
              <div className="col-3 ruppes">
                <h3 className='ruppes'>$7.5M</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
    </section>
    {/* home section end */}
    {/*   to Kindity section start */}

   <Welcome/>
    {/*   to  section end */}
    {/*   to Major Causes section start*/}
    <section className='mt-5 causes'>
      <div className="mojar">
      <div className='mojar container text-center'>
      <h1 className="  text-center">Our Major Causes</h1>
      <p className='mb-5' >The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence,<br className='d-md-block d-none'></br> and upturning of the natural chain of events that resounded.</p>
      <Causes/>
      </div>
      </div>
    </section>

    {/*   to Major Causes section end*/}
    {/*   to key section end*/}
    <Keys/>
    <Upcoming/>
    <Testimonial/>
    <Lastcause/>

  





    </>
  )
}

export default Home