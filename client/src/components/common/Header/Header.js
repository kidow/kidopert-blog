import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='brand'>
          <Link to='/'>reactblog</Link>
        </div>
        <div className='right'>
          오른쪽
        </div>
      </div>
    </header>
  );
};

export default Header;