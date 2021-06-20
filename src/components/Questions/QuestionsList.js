import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import './nicepage.scoped.css'
import './Home.scoped.css'

class QuestionsList extends Component {
  state = {
    answered: true
  }

  setanswered = () => {
    this.setState(() => ({
      answered: true
    }))
  }

  setunanswered = () => {
    this.setState(() => ({
      answered: false
    }))
  }

  render () {
    const userQuestions = this.props.users[this.props.authedUser].answers
    return (
      <section className="u-align-center u-clearfix u-grey-10 u-section-1" id="carousel_dc72">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-expanded-width-xs u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <button onClick={this.setanswered}>Answered</button>
              <button onClick={this.setunanswered}>Unanswered</button>
              {Object.keys(this.props.questions).map((question) => {
                if ((question in userQuestions) === this.state.answered) {
                  return <Question question={this.props.questions[question]}/>
                }
                return null
              })

              }
            </div>
          </div>
        </div>
            </section>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  return {
    questions: questions,
    users: users,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(QuestionsList)
