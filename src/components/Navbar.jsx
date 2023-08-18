import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { favicon, menu, close, } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Left field of NavBar */}
        <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
          <img src={favicon} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-[15px] font-bold cursor-pointer flex' style={{ color: '#5f2e00' }}>
            Dominic | The Professional Barber
          </p>
        </Link>

        {/* Right field of NavBar */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <a className={`${active === 'Book Appointment' ? 'text-swBygg-light' : 'text-swBygg-dark'} hover:text-swBygg-light text-[18px] font-medium cursor-pointer`} href='https://www.fresha.com/nb/a/edge-barbershop-oslo-storgata-10-a-1vbz9v2p/booking?employeeId=716488' target='_blank'>Book Appointment </a>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-swBygg-light' : 'text-swBygg-dark'} hover:text-swBygg-light text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>

          {/* SVG Icons for toggling NavBar on smaller screens */}
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div style={{ backgroundColor: '#5a4a41' }} className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? 'text-white'
                    : 'text-swBygg-lighter'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar;