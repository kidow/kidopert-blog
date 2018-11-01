import React, { Component } from 'react';
import './MarkdownRender.scss'
import marked from 'marked'

import Prism from 'prismjs'

import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-css.min.js'

class MarkdownRender extends Component {
  state = {
    html: ''
  }

  renderMarkdown = () => {
    const { markdown } = this.props
    if (!markdown) {
      this.setState({ html: '' })
      return
    }
    this.setState({
      html: marked(markdown, {
        breaks: true, // 일반 엔터로 새 줄 입력
        sanitize: true // 마크다운 내부 html 무시
      })
    })
  }

  constructor(props) {
    super(props);
    const { markdown } = this.props
    this.state = {
      html: markdown ? marked(props.markdown, { breaks: true, sanitize: true }) : ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown()
    }
    if(prevState.html !== this.state.html) {
      Prism.highlightAll()
    }
  }
  
  render() {
    const { html } = this.state
    const markup = { __html: html }
    return (
      <div className='markdown-render' dangerouslySetInnerHTML={markup}/>
    );
  }
}

export default MarkdownRender;