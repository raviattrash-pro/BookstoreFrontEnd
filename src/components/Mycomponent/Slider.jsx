import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import {useState } from "react";
import {ApiSlides} from './sliderApi';
import'./slider.css'
const Slider = () => {
  // Styles
  //const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle ="rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div className="slider">
      {/* left Arrow */}
      <div className="arrowStyle" onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className={`wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background} key={index}>
              <div className="slideStyle">
                <div className=" imgdiv ">
                <img
                  className =' imgcontent'
                  src={slide.src}
                  alt="man"
                />
                </div>
                <div className="discription">
                  <h2 className="contenth">{slide.content.h2}</h2>
                  <p className=" contentp">{slide.content.p}</p>
                  <button className="shopbutton">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* Right Arrow */}

      <div className="arrowStyle" onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;