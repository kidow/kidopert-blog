import React from 'react';
import ModalWrapper from 'components/modal/ModalWrapper'
import './LoginModal.scss'

const LoginModal = ({
  visible, password, error, onCancel, onLogin, onChange, onKeyPress
}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className='form'>
        <div className='close' onClick={onCancel}>&times;</div>
        <div className='title'>로그인</div>
        <div className='description'>관리자 비밀번호를 입력하세요.</div>
        <input 
          autoFocus 
          type='password' 
          placeholder='비밀번호 입력' 
          value={password} 
          onChange={onChange} 
          onKeyPress={onKeyPress}
        />
        { error && <div className='error'>로그인 실패</div>}
        <div className='login' onClick={onLogin}>로그인</div>
      </div>
    </ModalWrapper>
  );
};

export default LoginModal;