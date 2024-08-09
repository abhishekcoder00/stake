import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import icons
import CategoryData from './CategoryData';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-arrow slick-prev"
      style={{ 
        position: 'absolute', 
        top: '-14%', 
        left: '55rem',
        // right:'0px' ,
        zIndex: 1, 
        borderRadius: '50%',
        color: '#fff',
        padding: '10px',
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft}/>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-arrow slick-next"
      style={{ 
        position: 'absolute', 
        top: '-14%', 
        right: '14px', 
        zIndex: 1, 
        borderRadius: '50%',
        color: '#fff',
        padding: '10px',
      }}
    >
     <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};

const ImageGrid = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay:true,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState('Lobby');

  const getCategoryImages = (categoryName) => {
    const category = CategoryData.find(cat => cat.name === categoryName);
    return category ? category.images : [];
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex items-center gap-5 overflow-x-auto category-scroll text-white bg-black rounded-full py-[12px] px-2">
          {CategoryData.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`category-button text-[14px] tracking-tight font-semibold ${
                selectedCategory === category.name
                  ? 'selected'
                  : 'unselected'
              }`}
            >
              <div className="flex items-center justify-start"> 
                <FontAwesomeIcon icon={category.icon} className="mr-2 text-zinc-400" /> 
                <span className="text-white whitespace-nowrap">{category.name}</span> 
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        {selectedCategory === 'Lobby' ? (
          CategoryData.map((category) => (
            <div key={category.name} className="mb-8">
              <div className="flex items-baseline gap-4">
                <FontAwesomeIcon icon={category.icon} className="mr-2 text-zinc-400" />
                <h2 className="mb-4 text-xl font-bold text-white">{category.name}</h2>
              </div>
              <Slider {...sliderSettings}>
                {getCategoryImages(category.name).map((image, idx) => (
                  <div key={idx} className="relative transition-all transform hover:-translate-y-1.5 duration-500">
                    <img src={image} alt={`Image ${idx + 1}`} className="object-cover w-full h-auto transition-transform duration-300 ease-in-out rounded-lg shadow-md" />
                  </div>
                ))}
              </Slider>
            </div>
          ))
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-white">{selectedCategory}</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {getCategoryImages(selectedCategory).map((image, idx) => (
                <div key={idx} className="relative transition-all transform hover:scale-105">
                   <FontAwesomeIcon icon={image.icon} className="mr-2 text-zinc-400" /> 
                  <img src={image} alt={`Image ${idx + 1}`} className="object-cover w-full h-auto transition-transform duration-300 ease-in-out rounded-lg shadow-md" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGrid;
