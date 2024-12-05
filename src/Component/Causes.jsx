import React, { useEffect } from 'react'
import './../index.css'
import OwlCarousel from 'react-owl-carousel';
import Card from 'react-bootstrap/Card';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'




const Causes = () => {
    const options ={
        items:3,
        loop:true,
        // autoplay:true,
        // autoplayTimeOut:4000,
        nav:false,
        dots:false,
        margin:30,
        responsive:{
          1024:{
            items:3,
            innerWidth:"100%",
            outerWidth:"100%",
    
          },
          724:{
            items:2,
    
          },
          500:{
            items:1,
    
          },
          300:{
            items:1,
            innerWidth:"100%",
            outerWidth:"100%",
          },
        },
      };
  return (
    <>
    <OwlCarousel className='owl-theme ' {...options}>
    <div class='item'>
    <Card style={{}} data-aos-anchor-placement="bottom-center"  data-aos="fade-up" >
          <img src="img/blog/causes/causes-1.jpg"  className="card-img" alt=""/>
          <div className='c_parcent'><span></span></div>
      <Card.Body className=''>
        <Card.Title><h4 className='cards-title  ms-2 d-flex justify-content-start'>Did not find your Package</h4></Card.Title>
       
        <Card.Text className='d-flex justify-content-start'>
         <p className='card-para D-flex'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.</p>
        </Card.Text>
        
      
     
        </Card.Body>
        <div className="d-flex">
        <div className=" card-btnpink text-white">
                <a href="#" className='text-decoration-none text-light'>Raised: $50,689</a>
            </div>
            <div className="  border card-btnwhite">
            <a href="#"  className='text-dark text-decoration-none'>Total Need: $500k</a>
            </div>
            </div>
    </Card>
    </div>
    <div class='item'>
    <Card style={{}}>
          <img src="img/blog/causes/causes-2.jpg"  className="card-img" alt=""/>
          <div className='c_parcent'><span></span></div>
      <Card.Body className=''>
        <Card.Title><h4 className='cards-title  ms-2 d-flex justify-content-start'>Did not find your Package</h4></Card.Title>
       
        <Card.Text className='d-flex justify-content-start'>
         <p className='card-para D-flex'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.</p>
        </Card.Text>
        
      
     
        </Card.Body>
        <div className="d-flex">
        <div className=" card-btnpink text-white">
                <a href="#" className='text-decoration-none text-light'>Raised: $50,689</a>
            </div>
            <div className="  border card-btnwhite">
            <a href="#"  className='text-dark text-decoration-none'>Total Need: $500k</a>
            </div>
            </div>
    </Card>
    

    </div>
    <div class='item'>
    <Card style={{}}>
          <img src="img/blog/causes/causes-3.jpg"  className="card-img" alt=""/>
          <div className='c_parcent'><span></span></div>
      <Card.Body className=''>
        <Card.Title><h4 className='cards-title  ms-2 d-flex justify-content-start'>Did not find your Package</h4></Card.Title>
       
        <Card.Text className='d-flex justify-content-start'>
         <p className='card-para D-flex'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace that’s why it’s crucial.</p>
        </Card.Text>
        
      
     
        </Card.Body>
        <div className="d-flex">
        <div className=" card-btnpink text-white">
                <a href="#" className='text-decoration-none text-light'>Raised: $50,689</a>
            </div>
            <div className="  border card-btnwhite">
            <a href="#"  className='text-dark text-decoration-none'>Total Need: $500k</a>
            </div>
            </div>
    </Card>
   

    </div>
    
   
</OwlCarousel>;
    </>
  )
}

export default Causes