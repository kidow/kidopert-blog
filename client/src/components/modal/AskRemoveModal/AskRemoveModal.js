import React from 'react';
import './AskRemoveModal.scss'
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button'

const AskRemoveModal = ({visible, onConfirm, onCancel}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className='question'>
        <div className='title'>포스트 삭제</div>
        <div className='description'>이 포스트를 정말로 삭제하시겠습니까?</div>
      </div>
      <div className='options'>
        <Button theme='gray' onClick={onCancel}>취소</Button>
        <Button onClick={onConfirm}>삭제</Button>
      </div>
    </ModalWrapper>
  );
};

export default AskRemoveModal;