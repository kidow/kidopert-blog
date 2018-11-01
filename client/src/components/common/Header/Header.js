import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import Button from 'components/common/Button';

const Header = ({postId, onRemove}) => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='brand'>
          <Link to='/'>reactblog</Link>
        </div>
        <div className='right'>
          {
            postId && [
              <Button key='edit' theme='outline' to={`/editor?id=${postId}`}>수정</Button>,
              <Button key='remove' theme='outline' onClick={onRemove}>삭제</Button>
            ]
          }
          <Button theme='outline' to='/editor'>새 포스트</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;