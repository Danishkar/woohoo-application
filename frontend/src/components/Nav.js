import React from 'react';
import { Link } from 'react-router-dom';

// import data
import { navigation } from '../data';

const Nav = () => {
  return (
    <nav className='text-[15px]'>
      <ul className='flex gap-x-10'>
        {navigation.map((item, index) => {
          return (
            <Link to={item.href} key={index} className='capitalize hover:text-orange transition'>
              {item.name}
            </Link>
            
          );
        })}
      <button className='absolute bg-orange px-3 py-2 mt-1'>Log Out</button>
      </ul>
    </nav>
  );
};

export default Nav;
