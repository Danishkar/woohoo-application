import React from 'react';

// import components
import HeroSlider from '../components/HeroSlider';

const Hero = () => {
  return (
    <section className='relative min-h-[748px] pt-24 pb-12 lg:pt-24 overflow-hidden lg:px-[50px] after:lg:w-[740px] after:lg:h-[740px] after:bg-orange-tertiary after:absolute after:-right-28 after:-top-24 after:rounded-full flex items-center'>
      <HeroSlider />
    </section>
  );
};

export default Hero;
