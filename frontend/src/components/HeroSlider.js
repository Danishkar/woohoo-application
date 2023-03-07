import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

// import data
import { heroSlider } from '../data';

const HeroSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className='heroSlider'
      >
        {heroSlider.map((slide, index) => {
          // destructure slide
          const { title, subtitle, image, buttonText } = slide;
          return (
            <SwiperSlide className='py-12 lg:py-16' key={index}>
              <div className='container mx-auto text-center lg:text-left'>
                <div className='flex flex-col justify-between items-center lg:flex-row'>
                  <div className='flex-1'>
                    <h1 className='text-blue text-[36px] leading-tight lg:text-[72px] lg:leading-[98px] font-extrabold mb-4'>
                      {title}
                    </h1>
                    <p className='text-base lg:text-[18px] lg:leading-8 max-w-[540px] mb-8'>
                      {subtitle}
                    </p>
                    <button className='btn bg-orange text-white mb-8 lg:mb-0'>
                      {buttonText}
                    </button>
                  </div>
                  <div className='flex-1 flex justify-center'>
                    <img className='h-96 lg:h-auto' src={image.type} alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
