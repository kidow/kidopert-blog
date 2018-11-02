import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'

class LoginModalContainer extends Component {
  handleLogin = async () => {
    const { BaseActions,  password } = this.props
    try {
      await BaseActions.login(password)
      BaseActions.hideModal('login')
      localStorage.logged = 'true'
    } catch (e) {
      console.log(e)
    }
  }

  handleCancel = () => {
    const { BaseActions } = this.props
    BaseActions.hideModal('login')
  }

  handleChange = e => {
    const { value } = e.target
    const { BaseActions } = this.props
    BaseActions.changePasswordInput(value)
  }

  handleKeyPress = e => {
    if(e.key === 'Enter') {
      this.handleLogin()
    }
  }
  render() {
    const { handleCancel, handleChange, handleKeyPress, handleLogin } = this
    const { visible, password, error } = this.props
    return (
      <LoginModal
        onLogin={handleLogin}
        onChange={handleChange}
        onCancel={handleCancel}
        onKeyPress={handleKeyPress}
        visible={visible}
        error={error}
        password={password}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'login']),
    password: state.base.getIn(['loginModal', 'password']),
    error: state.base.getIn(['loginModal', 'error'])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);