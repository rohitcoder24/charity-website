import React from 'react'
import "./../index.css";

import OwlCarousel from "react-owl-carousel";
// import Card from "react-bootstrap/Card";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Lastcause = () => {
    const options = {
        items: 3,
        loop: true,
        // autoplay:true,
        // autoplayTimeOut:4000,
        nav: false,
        dots: false,
        margin: 50,
        responsive: {
          1024: {
            items: 5,
            innerWidth: "100%",
            outerWidth: "100%",
          },
          724: {
            items: 4,
          },
          500: {
            items: 1,
          },
          300: {
            items: 1,
            innerWidth: "100%",
            outerWidth: "100%",
          },
        },
      };

  return (
    <>
    <div className="container last-cause mb-5">
      <OwlCarousel className="owl-theme text-center " {...options}>
                <div class="item ">
                  <img src="img/clients-logo/c-logo-1.png" alt="rety" />
                </div>
                <div class="item">
                  <img src="img/clients-logo/c-logo-2.png" alt="rety" />
                </div>
                <div class="item">
                  <img src="img/clients-logo/c-logo-3.png" alt="rety" />
                </div>
                <div class="item">
                  <img src="img/clients-logo/c-logo-4.png" alt="rety" />
                </div>
                <div class="item">
                  <img src="img/clients-logo/c-logo-5.png" alt="rety" />
                </div>
                

              </OwlCarousel>
              </div >
    </>
  )
}

export default Lastcause