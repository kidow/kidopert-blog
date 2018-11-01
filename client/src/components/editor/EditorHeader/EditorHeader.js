import React from 'react';
import './EditorHeader.scss'
import Button from 'components/common/Button'

const EditorHeader = ({onGoBack, onSubmit, isEdit}) => {
  return (
    <div className='editor-header'>
      <div className='back'>
        <Button onClick={onGoBack} theme='outline'>뒤로가기</Button>
      </div>
      <div className='submit'>
        <Button onClick={onSubmit} theme='outline'>{isEdit ? '수정' : '작성'}하기</Button>
      </div>
    </div>
  );
};

export default EditorHeader;