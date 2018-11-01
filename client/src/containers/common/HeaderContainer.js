import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Header from 'components/common/Header'

class HeaderContainer extends Component {
  handleRemove = () => {
    
  }
  render() {
    const { handleRemove } = this
    const { match } = this.props
    const { id } = match.params
    return (
      <Header
        postId={id}
        onRemove={handleRemove}
      />
    );
  }
}

export default withRouter(HeaderContainer);