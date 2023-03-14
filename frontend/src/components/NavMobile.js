import React from 'react';
import { Link } from 'react-router-dom';

// import data
import { navigation } from '../data';

const NavMobile = () => {
  return (
    <nav className='h-full'>
      <ul className='flex flex-col space-y-5 justify-center items-center h-full'>
        {navigation.map((item, index) => {
          return (
            <Link to={item.href} key={index} className='capitalize font-medium text-blue'>
              {item.name}
            </Link>
            
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
