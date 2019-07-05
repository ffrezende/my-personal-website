import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

const NavBarProfileContat = () => {
  return (
    <div>
      <NavItem className='p-0'>
        <NavLink
          data-placement='bottom'
          href='https://github.com/ffrezende'
          rel='noopener noreferrer'
          target='_blank'
          title='Follow me on GitHub'
        >
          <i className='fab fa-github' />
          <p className='d-lg-none d-xl-none'>GitHub</p>
        </NavLink>
      </NavItem>
      <NavItem className='p-0'>
        <NavLink
          data-placement='bottom'
          href='https://www.instagram.com/fragafabricio/'
          rel='noopener noreferrer'
          target='_blank'
          title='Follow me on Instagram'
        >
          <i className='fab fa-instagram' />
          <p className='d-lg-none d-xl-none'>Instagram</p>
        </NavLink>
      </NavItem>
    </div>
  );
};

export default NavBarProfileContat;
