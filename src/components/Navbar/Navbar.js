import React from 'react';
import './Navbar.css';
import microLogo from '../../assets/images/micromania.png';
import { Icon } from '@iconify/react';

const Navbar = () => {
  // let menu = document.getElementById('#menu-icon');
  // let navbar = document.querySelector('.navbar');

  // menu.onclick = () => {
  //   menu.classList.toggle('bx-x');
  //   navbar.classList.toggle('open');
  // }
  return (
    <>
      <header >
        <div className='d-flex align-items-center'>
          <div className="bx bx-menu mx-2 " id="menu-icon" />
          <a href="#" > <img className="logo" src={microLogo} alt="" />  </a>

        </div>

        <ul className="navbar navbar1 ps-0">
          <li className='live-shop'><a href="#" >Live shopping</a></li>
          <li className='p-3'><a href="#" >Jeux Vidéo</a></li>
          <li><a href="#">Digital</a></li>
          <li><a href="#">occasion</a></li>
          <li><a href="#">fanzone</a></li>
          <li><a href="#">Magasins</a></li>
        </ul>

        <div className="main">
          <a href="#" className="user"><i className="ri-user-fill" /></a>
          <Icon className='mx-1' icon="bxs:shopping-bag" color="white" width="28" />
          <Icon icon="akar-icons:search" color="white" width="25" />


        </div>

      </header>

    </>
  );
};

export default Navbar;