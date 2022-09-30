import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {userid: '', password: '', errorMsg: '', isError: false}

  onUserIdInput = event => {
    this.setState({userid: event.target.value})
  }

  onPassInput = event => {
    this.setState({password: event.target.value})
  }

  LoginSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  onLoginClick = async event => {
    event.preventDefault()
    const {userid, password} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {
      user_id: userid,
      pin: password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      this.LoginSuccess(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg, isError: true})
    }
  }

  render() {
    const {errorMsg, isError} = this.state
    return (
      <div className="login-bg-container">
        <div className="login-content-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-image"
            />
          </div>
          <form className="form-container">
            <h1 className="form-title">Welcome Back!</h1>
            <label htmlFor="userid" className="label-item">
              User ID
            </label>
            <input
              type="text"
              id="userid"
              placeholder="Enter User ID"
              className="input-field"
              onChange={this.onUserIdInput}
            />
            <label htmlFor="pin" className="label-item">
              PIN
            </label>
            <input
              type="password"
              id="pin"
              placeholder="Enter PIN"
              className="input-field"
              onChange={this.onPassInput}
            />
            <button
              type="submit"
              className="submit-button"
              onClick={this.onLoginClick}
            >
              Login
            </button>
            {isError && <p className="message">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
