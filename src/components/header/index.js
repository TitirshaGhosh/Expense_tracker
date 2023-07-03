import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='header-logo'>
         Expenser <i class="fi-rr-credit-card"></i>
        </div>
        <div className='header-button'>
       <a href='https://github.com/TitirshaGhosh' target='_blank' rel='noopener noreferrer'>
            <i class="devicon-github-original"></i> Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;