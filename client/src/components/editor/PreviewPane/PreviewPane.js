import React from 'react';
import './PreviewPane.scss'

const PreviewPane = ({markdown, title}) => {
  return (
    <div className='preview-pane'>
      <h1 className='title'>제목</h1>
      <div>내용</div>
    </div>
  );
};

export default PreviewPane;