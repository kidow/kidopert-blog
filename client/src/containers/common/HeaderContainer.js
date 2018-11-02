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
    const { match, logged } = this.props
    const { id } = match.params
    return (
      <Header
        postId={id}
        logged={logged}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  state => ({
    logged: state.base.get('logged')
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseAction, dispatch)
  })
)(withRouter(HeaderContainer));