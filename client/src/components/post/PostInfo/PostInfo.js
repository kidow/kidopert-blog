import React from 'react';
import './PostInfo.scss'

const PostInfo = () => {
  return (
    <div className='post-info'>
      <div className='info'>
        <h1>타이틀</h1>
        <div className='tags'>
          <a>#태그</a>
          <a>#태그</a>
          <a>#태그</a>
        </div>
        <div className='date'>Oct 29, 2017</div>
      </div>
    </div>
  );
};

export default PostInfo;