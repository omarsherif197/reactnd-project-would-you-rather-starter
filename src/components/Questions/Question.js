import React, { Component } from 'react'
import { connect } from 'react-redux'
import './nicepage.scoped.css'
import './Home.scoped.css'
import avatar from ``

class Question extends Component {
  render () {
    console.log(`../${this.props.users[this.props.authedUser].avatarURL}`)
    return (
      <div className="u-container-style u-list-item u-repeater-item u-white u-list-item-1">
              <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-1">
                <img alt="" className="u-expanded-width-xs u-image u-image-default u-image-1" src="" />
                <div className="u-align-left-xs u-container-style u-expanded-width-xs u-group u-video-cover u-group-1">
                  <div className="u-container-layout u-valign-middle-xs u-container-layout-2">
                    <h3 className="u-custom-font u-font-oswald u-text u-text-2">Would you rather</h3>
                    <p className="u-text u-text-3">{this.props.question.optionOne.text}</p>
                    <p className="u-text u-text-5">or</p>
                    <p className="u-text u-text-3">{this.props.question.optionTwo.text}</p>
                    <a href="https://nicepage.com/k/astrology-website-templates" className="u-btn u-btn-rectangle u-button-style u-grey-10 u-btn-1">View poll</a>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users: users,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Question)
