import React, { Component } from 'react'
import './main.scoped.css'
import './util.scoped.css'
import { connect } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
      val: ''
    }

    updateVal = (val) => {
      this.setState(() => ({
        val: val
      }))
    }

    verifyuser = (e) => {
      e.preventDefault()
      if (this.state.val in this.props.users) {
        this.props.dispatch(setAuthedUser(this.state.val))
        this.props.history.push(this.props.location.state.referrer)
      } else {
        alert('This user does not exist')
        this.setState(() => ({
          val: ''
        }))
      }
    }

    render () {
      return (
        <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <form className="login100-form validate-form">
                <span className="login100-form-title p-b-26">
                    Welcome
                </span>
                <span className="login100-form-title p-b-48">
                    <i className="zmdi zmdi-font"></i>
                </span>

                <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" name="username" value={this.state.val} onChange={(e) => this.updateVal(e.target.value)}/>
                    <span className="focus-input100" data-placeholder="Username"></span>
                </div>

                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button className="login100-form-btn" onClick={(e) => { this.verifyuser(e) }}>
                            Login
                        </button>
                    </div>
                </div>

                {/* <div className="text-center p-t-115">
                    <span className="txt1">
                        Don’t have an account?
                    </span>

                    <a className="txt2" href="#">
                        Sign Up
                    </a>
                </div> */}
            </form>
        </div>
    </div>
</div>
      )
    }
}

function mapStateToProps ({ users }) {
  return {
    users: users
  }
}

export default withRouter(connect(mapStateToProps)(Login))
