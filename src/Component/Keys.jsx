import React from 'react'
import './../index.css'
import { IoDiamondOutline } from 'react-icons/io5'
import { CiCoffeeCup } from 'react-icons/ci'
import { PiWheelchair } from 'react-icons/pi'


const Keys = () => {
  return (
    <>
    <section className='feature_area'>
    <div className="Key-Features"> 
        <div className="container  py-3 text-white z-4 text-center">
            <div className="kay-title mt-5">
                <h2 className='pt-5'> Our Key Features</h2>
                <p className='kay-ptag white'> The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, <br className='d-lg-block d-md-none'></br>and upturning of the natural chain of events that resounded.</p>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
            <div className="col-lg-4  p-3" >
                <div className='border border-secondary keyback text-light  p-3'>
                <IoDiamondOutline className='fs-4 mt-3 kay-border' />
                <h4 className='text-light  keyheading mt-1 mb-4'>SPONSORSHIP</h4>
                <p className='kay-ptag white'>
                The French Revolutioncons tituted for the conscience of the dominant. aristocr atic class a fall from.
                </p>
                 </div>

              </div>
              <div className="col-lg-4 p-3" >
                <div className='border border-secondary keyback text-light  p-3'>
                <CiCoffeeCup IoDiamondOutline className='fs-4 mt-3' />
                <h4 className='text-light mt-1 keyheading mb-4'>Donate Amount</h4>
                <p className='kay-ptag white'>
                The French Revolutioncons tituted for the conscience of the dominant. aristocr atic class a fall from.
                </p>
                 </div>

              </div>
              <div className="col-lg-4 p-3" >
                <div className='border  border-secondary keyback text-light  p-3'>
                <PiWheelchair className='fs-4 mt-3' />

                <h4 className='text-light mt-1 keyheading mb-4'>Become a Volunteer</h4>
                <p className='kay-ptag white'>
                The French Revolutioncons tituted for the conscience of the dominant. aristocr atic class a fall from.
                </p>
                 </div>

              </div>
            </div>
        </div>
    </div>
    </section>
   
    </>
  )
}

export default Keys