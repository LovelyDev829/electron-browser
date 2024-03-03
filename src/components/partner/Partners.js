import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Slider.css";
const Partners = (props) => {
  console.log(props.slides);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {props.slides?.map((slide, index) => (
          <div
            className="slider-card"
            key={index}
          >
            <div style={{ display: "flex", justifyContent:"center"}}>
              <div style={{width:"30%",padding:"50px 5px 5px 5px"}}>
                <img
                  className="slider-card-image"
                  src={slide.image}
                  alt="pic"
                />
              </div>
              <div className="slider-card-txt">
                <div className="card-txt">
                  <p className="slider-card-title">{slide.title}</p>
                </div>
                <div className="card-txt">
                  <p className="slider-card-section">{slide.section}</p>
                </div>
                <div className="card-txt">
                  <p className="slider-card-description">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};

export default Partners;
