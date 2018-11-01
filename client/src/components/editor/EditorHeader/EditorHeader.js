import React from 'react';
import './EditorHeader.scss'
import Button from 'components/common/Button'

const EditorHeader = ({onGoBack, onSubmit}) => {
  return (
    <div className='editor-header'>
      <div className='back'>
        <Button onClick={onGoBack} theme='outline'>뒤로가기</Button>
      </div>
      <div className='submit'>
        <Button onClick={onSubmit} theme='outline'>작성하기</Button>
      </div>
    </div>
  );
};

export default EditorHeader;