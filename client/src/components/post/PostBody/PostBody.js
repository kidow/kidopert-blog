import React from 'react';
import './PostBody.scss'
import MarkdownRender from 'components/common/MarkdownRender'

const PostBody = ({body}) => {
  return (
    <div className='post-body'>
      <div className='paper'>
        <MarkdownRender markdown={body}/>
      </div>
    </div>
  );
};

export default PostBody;