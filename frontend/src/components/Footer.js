import React from 'react';

// import logo
import Logo from '../assets/img/logo-white.png';

// import data
import { social } from '../data';

const Footer = () => {
  return (
    <footer className='bg-orange py-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row justify-between items-center text-white'>
          <a href='#'>
            <img src={Logo} className="w-28" alt='' />
          </a>
          <div className='text-[15px]'>
            &copy; Copyright 2022. All rights reserved.
          </div>
          <div className='flex gap-x-4'>
            {social.map((item, index) => {
              return (
                <a href={item.href} key={index}>
                  <div className='bg-[#fe8d71a9] hover:bg-[#FE8D71] w-10 h-10 rounded-full flex justify-center items-center transition'>
                    <div className='text-2xl'>{item.icon}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
