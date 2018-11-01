import React, { Component } from 'react';
import './EditorPane.scss'

class EditorPane extends Component {
  render() {
    return (
      <div className='editor-pane'>
        <input className='title' placeholder='제목을 입력하세요' name='title' />
        <div className='code-editor'></div>
        <div className='tags'>
          <div className='description'>태그</div>
          <input name='tags' placeholder='태그를 입력하세요 (쉼표로 구분)' />
        </div>
      </div>
    );
  }
}

export default EditorPane;