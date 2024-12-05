import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBehance, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaDribbble } from 'react-icons/fa6';
import "./../index.css"

const Navbar1 = () => {
  return (
    < >
    <div className='border'>

     <Navbar className=" container justify-content-between ">
        <div className="left d-md-block  d-none tex" inline>
            <ul>
                <li className='navminiicons'>
                    <a href="#home"><FaFacebookF/></a>
                </li>
                <li className='ms-2 navminiicons '>
                    <a href="#home"><FaTwitter/></a>
                </li>
                <li className='ms-2 navminiicons '>
                    <a href="#home"><FaDribbble/></a>
                </li>
                <li className='ms-2 navminiicons '>
                    <a href="#home"><FaBehance/></a>
                </li>
            </ul>
        </div>
        <div className=" d-md-block  d-none">
            <select className='right-items   '>
                <option> English</option>
                <option> Indian</option>
                <option> Bangle</option>
                <option> Aus</option>
            </select>
            <a href="" className=' right-items btn-myAccount'>My Account</a>
            <a href="" className=' right-items btn-Donate'>Donate Now</a>
        </div>
    </Navbar>
    </div>

    </>
  )
}

export default Navbar1