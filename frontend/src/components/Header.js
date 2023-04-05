import React, { useEffect, useState } from 'react';


// import icons
import { CgMenuRight } from 'react-icons/cg';

// import components
// import Program from './Program';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { Link } from 'react-router-dom';

const Header = ({logged,setLogged}) => {
  const [bg, setBg] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-white shadow-md py-5' : 'bg-none py-5'
      } fixed w-full right-0 left-0 z-10 transition-all duration-300`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to={'/'}>
          {/* <img src={Logo} alt='' /> */}
          <h1 className='text-xl font-bold text-blue'>Woohoo</h1>
        </Link>
        {/* nav */}
        <div className='hidden lg:flex'>
          <Nav logged={logged} setLogged={setLogged}/>
        </div>
        {/* program */}
        {/* <Program /> */}
        {/* nav mobile button */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden cursor-pointer'
        >
          <CgMenuRight className='text-blue text-3xl' />
        </div>
        {/* nav mobile */}
        <div
          className={`${
            navMobile ? 'max-h-[260px]' : 'max-h-0'
          } fixed w-full bg-yellow shadow-lg top-[70px] left-0 h-full overflow-hidden transition-all`}
        >
          <NavMobile logged={logged} setLogged={setLogged} />
        </div>
      </div>
    </header>
  );
};

export default Header;
