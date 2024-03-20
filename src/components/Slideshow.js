import React, { useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/SlideShow.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button className='prevButton slideButton' onClick={goToPrevSlide}>
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img className='pictureLogement' src={images[currentIndex]} alt={`Slide ${currentIndex}`} title='Image du logement' />
      <button className='nextButton slideButton' onClick={goToNextSlide}>
      <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="currentIndexDisplay">{currentIndex + 1}/{images.length}</div>
    </div>
  );
};

export default Carousel;