import React from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/' className='brand'>reactblog</Link>
      <div className='admin-login'>관리자 로그인</div>
    </footer>
  );
};

export default Footer;