import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import Button from 'components/common/Button';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='brand'>
          <Link to='/'>reactblog</Link>
        </div>
        <div className='right'>
          <Button theme='outline' to='/editor'>새 포스트</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;