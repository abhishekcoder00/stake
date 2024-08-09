import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../Data';

export default function PromoSlider() {
    var settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        pauseOnHover: true,
        arrows: true,
    };

    return (
        <div className="slick-main ">
            <Slider {...settings} className="m-4">
                {data.map((d, i) => (
                    <div key={i} className="rounded bg-[#4a5155] shadow-xl  flex flex-col justify-center items-center text-white p-4">
                       <div className=" md:grid grid-cols-2">
                        <div className='mt-3 text-white'>
                          <span className="bg-white text-black text-[15px] p-2">{d.span}</span>
                          <h2 className="text-[18px] font-bold mt-3">{d.name}</h2>
                          <p className='text-[16px]'>{d.description}</p>
                          <button className='p-2 mt-4 border-2'>{d.button}</button>

                        </div>
                        <div>
                          <img src={d.image} alt="image" className="w-[100%] h-full"/>

                        </div>


                       </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
