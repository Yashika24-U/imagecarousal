import React, { useState } from "react";

const ImageSlider = ({ slider }) => {
  const [currentIdx, setcurrentIdx] = useState(0);
  const sliderStyle = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${slider[currentIdx].url})`,
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const letftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const goToprev = () => {
    const isFirstslide = currentIdx === 0;
    const newIndex = isFirstslide ? slider.length - 1 : currentIdx - 1;
    setcurrentIdx(newIndex);
  };
  const goTonext = () => {
    const isLastslide = currentIdx === slider.length - 1;
    const newIndex = isLastslide ? 0 : currentIdx + 1;
    setcurrentIdx(newIndex);
  };
  const dotContainerstyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "30px",
  };

  const goToslide = (slideIndex)=>{
    setcurrentIdx(slideIndex)
  }

  return (
    <div style={sliderStyle}>
      <div style={letftArrowStyles} onClick={goToprev}>
        {" "}
        &#10096;{" "}
      </div>
      <div style={rightArrowStyles} onClick={goTonext}>
        {" "}
        &#10097;{" "}
      </div>

      <div style={slideStyles}></div>
      <div style={dotContainerstyles}>
        
          {slider.map((slide, slideIndex) => {
            return <div  key = { slideIndex} style={dotStyles} onClick={()=>goToslide(slideIndex)}>&#8226;</div>
          })}
        
      </div>
    </div>
  );
};

export default ImageSlider;
