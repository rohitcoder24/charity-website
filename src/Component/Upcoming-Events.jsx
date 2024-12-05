import React from 'react'
import './../index.css'
import OwlCarousel from 'react-owl-carousel';
import Card from 'react-bootstrap/Card';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Upcoming = () => {
  const options ={
    items:2,
    loop:true,
    // autoplay:true,
    // autoplayTimeOut:4000,
    nav:false,
    dots:false,
    margin:30,
    responsive:{
      1024:{
        items:2,
        innerWidth:"100%",
        outerWidth:"100%",

      },
      724:{
        items:1,

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
    <section>
    <div className="container mt-5 p-4">
        <div className="text-center">
            <h2 className='upcoming'>Upcoming Events</h2>
            <p>
            If you are a serious astronomy fanatic like a lot of us are, you can probably<br className='d-lg-block d-none'></br>
            remember that one event in childhood that started.
            </p>
        </div>
        <OwlCarousel className='owl-theme mt-5 '{...options}>
    <div class='item  '>
     
      <div class=" d-md-flex align-items-center media ">
  <div class="flex-shrink-0 d-flex ">
    <img src="img/event/event-1.jpg"   alt="" />
  </div>
  <div class="">
    <div className="para-event  ">
<a href="# " className='mb-5'>25th February, 2017</a>
  <a href="#"><h4 className='mt-4'>The Universe Through  A Child S Eyes</h4></a>
  <p className=''>For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes</p>
  </div>
  </div>
</div>

    </div> 
    <div class='item'>
    <div class="d-md-flex align-items-center ">
  <div class="flex-shrink-0">
    <img src="img/event/event-2.jpg" alt="" />
  </div>
  <div class="">
    <div className="para-event ">
<a href="# " className='mb-5'>25th February, 2017</a>
  <a href="#"><h4 className='mt-4'>The Universe Through  A Child S Eyes</h4></a>
  <p>For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes</p>
  </div>
  </div>
</div>

    </div>  
</OwlCarousel>
    </div>
    </section>
    
    </>
  )
}

export default Upcoming