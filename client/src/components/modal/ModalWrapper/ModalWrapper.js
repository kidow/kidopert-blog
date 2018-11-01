import React, { Component } from 'react';
import './ModalWrapper.scss'

class ModalWrapper extends Component {
  render() {
    const { children, visible } = this.props
    if (!visible) return null
    return (
      <div>
        <div className='gray-background'/>
        <div className='modal-wrapper'>
          <div className='modal'>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;