import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AskRemoveModal from 'components/modal/AskRemoveModal'
import * as baseActions from 'store/modules/base'
import * as postActions from 'store/modules/post'

class AskRemoveModalContainer extends Component {
  handleCancel = () => {

  }

  handleConfirm = () => {

  }
  render() {
    const { visible } = this.props
    const { handleCancel, handleConfirm } = this
    return (
      <AskRemoveModal 
        visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'remove'])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(AskRemoveModalContainer);