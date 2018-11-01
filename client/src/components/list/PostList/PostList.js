import React from 'react';
import './PostList.scss'
import { Link } from 'react-router-dom'

const PostItem = () => {
  return (
    <div className='post-item'>
      <h2><a>타이틀</a></h2>
      <div className='date'>2017-10-24</div>
      <p>내용</p>
      <div className='tags'>
        <a>#태그</a>
        <a>#태그</a>
        <a>#태그</a>
      </div>
    </div>
  );
};

const PostList = () => (
  <div className='post-list'>
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </div>
)

export default PostList;