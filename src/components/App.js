import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingScreen from 'react-loading-screen'
import logo from '../wouldyou.png'
import QuestionsList from './QuestionsList'
import Login from './Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuestionPage from './QuestionPage'
import QuestionForm from './QuestionForm'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <div>
         <LoadingScreen
         loading={this.props.loading}
         spinnerColor='#c7be16'
         textColor='#676767'
         logoSrc= {logo}
         text='Loading...'>
           {this.props.loading === true
             ? null
             : <QuestionForm />}
        </LoadingScreen>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
