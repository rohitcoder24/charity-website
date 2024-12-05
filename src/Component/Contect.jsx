import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { useFormik } from "formik";
import {singUpSchema} from "./../schemas"
 
const initialValues ={
  name: "",
  email:"",
  subject:'',
  message:'',
}

const Contect = () => {
   const {values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:singUpSchema,
    onSubmit:(values) =>{
      console.log(values);
      
    },
  });
  console.log(errors);
  return (
    <>
      <div className="gallary text-center mb-5">
        <h1> Upcoming Event</h1>
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
        </div>
      </div>
      <div className="container mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.2249504427505!2d77.99471037450067!3d27.212086347162852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974775df183aa2b%3A0x7869914c2d7c2429!2sTechnosters!5e0!3m2!1sen!2sin!4v1724386882008!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, marginTop: 40 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        />
      </div>
      <div className="container ">
        <div className="row mt-5 py-5 ">
          <div className="col-lg-3 ">
            <div className="d-flex  side-col">
              <div>
                <span className=" side-text">
                  <TiHomeOutline />
                </span>
              </div>
              <div className="ms-3">
                <h5 className="m-0 ">California, United States</h5>
                <p>Santa monica bullevard</p>
              </div>
            </div>
            <div className="d-flex  side-col">
              <div>
                <span className=" side-text">
                  <BsTelephone />
                </span>
              </div>
              <div className="ms-3">
                <h5 className="m-0 ">00 (440) 9865 562</h5>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
            </div>
            <div className="d-flex  side-col">
              <div>
                <span className=" side-text">
                  <CiMail />
                </span>
              </div>
              <div className="ms-3">
                <h5 className="m-0 ">[email protected]</h5>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9 ">
            <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
              <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              placeholder="Enter name"
              className="single-input mt-4 border"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.name && touched.name ? (<p>{errors.name}</p>) : null  }
            <input
              type="email"
              name="email"
              id="name"
              value={values.email}
              placeholder="Enter Email"
              className="single-input mt-4 border"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.email && touched.email ? (<p>{errors.email}</p>) : null  }
            <input
              type="text"
              name="subject"
              id="name"
              value={values.subject}
              placeholder="Subject"
              className="single-input mt-4 border"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.subject && touched.subject ? (<p>{errors.subject}</p>) : null  }
              </div>
              <div className="col-md-6">
              <textarea
                    class="single-textarea-masssage mt-4 border"
                    placeholder="Message"
                    name="message"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
            {errors.message && touched.message ? (<p>{errors.message}</p>) : null  }
            <div className="end-submit d-flex align-items-end ">
            <input type="submit" value="message send" className="btn-submit ms-auto" />

            </div>
              </div>
            </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contect;
