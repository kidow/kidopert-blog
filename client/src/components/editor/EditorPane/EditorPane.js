import React, { Component } from 'react';
import './EditorPane.scss'
import CodeMirror from 'codemirror'

import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/css/css'
import 'codemirror/mode/shell/shell'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

class EditorPane extends Component {

  editor = null
  codeMirror = null

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    })
  }
  componentDidMount() {
    this.initializeEditor()
  }
  render() {
    return (
      <div className='editor-pane'>
        <input className='title' placeholder='제목을 입력하세요' name='title' />
        <div className='code-editor' ref={ref => this.editor=ref}></div>
        <div className='tags'>
          <div className='description'>태그</div>
          <input name='tags' placeholder='태그를 입력하세요 (쉼표로 구분)' />
        </div>
      </div>
    );
  }
}

export default EditorPane;