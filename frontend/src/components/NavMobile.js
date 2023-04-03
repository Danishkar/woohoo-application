import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// import data
import { navigation } from '../data';

const NavMobile = ({logged,setLogged}) => {
  return (
    <nav className='h-full'>
      <ul className='flex flex-col space-y-5 justify-center items-center h-full'>
        {navigation.map((item, index) => {
          if(item.inpage === true) {
            return (
              <ScrollLink to={item.href} smooth={true} duration={500} key={index} className='capitalize hover:text-orange transition cursor-pointer'>
                {item.name}
              </ScrollLink>
            )
          }else{
            return (
              <Link to={item.href} key={index} className='capitalize hover:text-orange transition'>
                {item.name}
              </Link>
            )
          }
        })}
        {
          logged ?
            <Link to="/login" onClick={()=>{setLogged(false)}} className='capitalize hover:text-orange transition'>
              Log Out
            </Link>
          :
          <Link to="/login" className='capitalize hover:text-orange transition'>
            Log In
          </Link>
        }

      </ul>
    </nav>
  );
};

export default NavMobile;
