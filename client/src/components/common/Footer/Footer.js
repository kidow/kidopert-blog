import React from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = ({onLoginClick, logged}) => {
  return (
    <footer className='footer'>
      <Link to='/' className='brand'>reactblog</Link>
      <div className='admin-login' onClick={onLoginClick}>
        {logged ? '로그아웃' : '관리자 로그인'}
      </div>
    </footer>
  );
};

export default Footer;