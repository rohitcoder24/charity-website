import React from 'react'
import { Form } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

const Donation = () => {
  return (
    <>
    <div className="gallary text-center">
        <h1>
           Donation
        </h1>
        <div className='mt-4'>

        <a href="" className='me-2'>Home</a> <a href=""><FaArrowRight /></a> <a href=""className='ms-2'>Donation</a> 
        </div>


    </div>
    <div className="container mt-5">
        <div className="row py-5 ">
            <div className="col-md-6 ">
                <div>
                <h4 className=''>
                Divided Evenly
                </h4>
                <p className="para-dom">
                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
                </div>
                <div>
                <h4 className=' mt-5'>
                Transperancy All the Way
                </h4>
                <p className="para-dom">
                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
                </div>
                <div>
                <h4 className='mt-5'>
                Trustworthy
                </h4>
                <p className="para-dom">
                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.
                </p>
                </div>
            </div>
            <div className="col-md-6">
            <Form.Select
                  className="mt-4  domation text-secondary"
                  aria-label="Default select example"
                >
                  <option>Project you want to donate</option>
                  <option>Project you want to donate</option>
                  <option>Project you want to donate</option>
                  
                </Form.Select>
                <div className="row">
                  <div className="col-lg-6">
                  <input
                  type="text"
                  name="name"
                  placeholder=" Name"
                  className="single-input border mt-4"
                ></input>
                  </div>
                  <div className="col-lg-6">
                  <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="single-input mt-4 border"
                ></input>
                
                  </div>
                </div>
                <input
                  type="text"
                  name=""
                  placeholder="Donation Amount (USD) "
                  className="single-input mt-4 border"
                ></input>
                  <textarea
                    class="single-textarea border mt-4"
                    placeholder="Message"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Message'"
                    required=""
                  ></textarea>
                
                    <button className="doation-btn mt-5 ">Donation now</button>
            </div>
            <div className="col-12  d-flex  mt-5 justify-content-center">
              <p className='para-dom  me-4 mt-2'>
              We accept: 
              </p>
              <img src="img/master-card.png" alt="sdfgh" />

            </div>


        </div>
    </div>
    </>
  )
}

export default Donation