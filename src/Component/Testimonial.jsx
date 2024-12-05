import React from "react";
import "./../index.css";
import OwlCarousel from "react-owl-carousel";
import Card from "react-bootstrap/Card";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Testimonial = () => {
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
        items: 2,
      },
      724: {
        items: 2,
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
      <div className="Testimonial ">
        <div className="container p_120">
          <div className="row py-5 testi-row mb-5">
            <div className="col-lg-4   donors align-middle ">
                <h1>Testimonial from our Donors</h1>
                 <p>Las Vegas has more than 100,000 hotel rooms to choose from. There is something for every budget, and enough.</p>
            </div>
            <div className="col-lg-8 ">
              <OwlCarousel className="owl-theme " {...options}>
                <div class="item">
                  <Card className="  border border-light">
                    <img
                      src="img/testimonials/testi-1.png"
                      className="img-testi"
                      alt=""
                    />
                    <Card.Body className="text-center ">
                      <Card.Title>
                    <p> It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its </p>
                    
                    
                      </Card.Title>

                      <Card.Text className="">
                      <h4 className="">Cordelia Barton</h4>
                      <h6>CEO at Google</h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                <Card className=" border border-light">
                    <img
                      src="img/testimonials/testi-2.png"
                      className="img-testi"
                      alt=""
                    />
                    <Card.Body className="text-center ">
                      <Card.Title>
                    <p> It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its </p>
                    
                    
                      </Card.Title>

                      <Card.Text className="">
                      <h4 className="">Cordelia Barton</h4>
                      <h6>CEO at Google</h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

              </OwlCarousel>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
