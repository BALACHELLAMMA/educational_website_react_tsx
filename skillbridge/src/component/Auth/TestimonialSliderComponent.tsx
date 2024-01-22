import { useState } from 'react';
import { forwardArrow, backwardArrow } from "../../assets/resource/imgResource";
import { testimoniallist } from "../Data/TestimonialData";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSliderComponent = () => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows :false,
  };

  const goToNextSlide = () => {
    slider.slickNext();
  };

  const goToPrevSlide = () => {
    slider.slickPrev();
  };

  return (
    <>
        <Slider ref={(slider:Slider) => setSlider(slider)} {...settings}>
          {testimoniallist.map((testimonial) => {
            return (
              <div className="comments_container bg-white rounded" key={testimonial.id}>
                <p className="p-4">
                  {testimonial.desc}
                </p>
                <div
                  className="profile_container border-top p-4 
                        d-flex justify-content-between flex-wrap"
                >
                  <div className="profile  d-flex gap-3 align-items-center">
                    <img src={testimonial.image} alt="avatar" />
                    <p className="mt-3">{testimonial.name}</p>
                  </div>
                  <button className="read_more_button rounded  border-0 fw-medium p-3 mt-2">
                    Read Full Story
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="button_container align-self-md-end align-self-center mt-3">
          <button
            className="bg-white rounded border-0 p-3"
            onClick={goToPrevSlide}
          >
            <img src={backwardArrow} alt="Backward" />
          </button>
          <button
            className="bg-white rounded border-0 p-3 ms-2"
            onClick={goToNextSlide}
          >
            <img src={forwardArrow} alt="Forward" />
          </button>
        </div>
    </>
  );
};

export default TestimonialSliderComponent;
