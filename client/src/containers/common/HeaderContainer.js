import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Header from 'components/common/Header'
import * as baseAction from 'store/modules/base'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  handleRemove = () => {
    const { BaseActions } = this.props
    BaseActions.showModal('remove')
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

export default connect(
  state => ({}),
  dispatch => ({
    BaseActions: bindActionCreators(baseAction, dispatch)
  })
)(withRouter(HeaderContainer));