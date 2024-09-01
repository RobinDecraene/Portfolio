import React, { useState } from 'react';
import style from './imageSlider.module.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={style.sliderStyles}>
      <div>
        <div onClick={goToPrevious} className={style.leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} className={style.rightArrowStyles}>
          ❱
        </div>
      </div>
      <div 
        className={style.slideStyles} 
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className={style.dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className={`${style.dotStyle} ${slideIndex === currentIndex ? style.activeDot : ''}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
