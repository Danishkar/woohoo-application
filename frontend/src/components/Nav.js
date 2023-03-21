import React from 'react';
import { Link } from 'react-router-dom';

// import data
import { navigation } from '../data';

const Nav = () => {
  return (
    <nav className='text-[15px]'>
      <ul className='flex gap-x-10'>
        {navigation.map((item, index) => {
          if(item.name === 'LogOut') {
            return (
              <Link to={item.href} key={index} className='capitalize hover:text-orange transition'>
                {item.name}
              </Link>
            )
          }else{
            return (
              <Link to={item.href} key={index} className='capitalize hover:text-orange transition'>
                {item.name}
              </Link>
            )
          }

          
        })}
      </ul>
    </nav>
  );
};

export default Nav;
