import React from 'react'
import { FiDatabase, FiUsers } from 'react-icons/fi'
import { GiBlackBook } from 'react-icons/gi'

const Welcome = () => {
  return (
    <>
    <section className='container Welcome  mt-5 mb-5 py-5'>
    <div className="row ">
      <div className="col-lg-6 ">
        <h1>Welcome to Kindity</h1>
        <p className='text-secondary'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
        <div className="row welrow ">
          <div className="col-md-3 p-1  wel_item mb-5 border">
            <i className='icons ms-3 mt-5'><FiDatabase /></i>
            <h3 className='Donation ms-3'>$2.5M</h3>
            <p className=' ms-3  text-secondary'>Total Donation</p>
          </div>
          <div className="col-md-3 p-1 ms-md-4 wel_item mb-5 border">
            <i className='icons ms-3 mt-5 '><GiBlackBook /></i>
            <h3 className='Donation ms-3'>1465</h3>
            <p className=' ms-3  text-secondary'>Total Project</p>
          </div>
          <div className="col-md-3 p-1 ms-md-4  wel_item mb-5 border">
            <i className='icons ms-3 mt-5'><FiUsers /></i>
            <h3 className='Donation ms-3'>3965</h3>
            <p className=' ms-3 md-4 text-secondary '>Total Volunteers</p>
          </div>
        </div>

      </div>
      <div className="col-lg-6">
          <img src="img/welcome-img.jpg " alt=""  className='img-fluid wel-img'/>
      </div>
    </div>

   </section>
    </>
  )
}

export default Welcome