import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingScreen from 'react-loading-screen'
import logo from '../wouldyou.png'
import QuestionsList from './QuestionsList'
import Login from './Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuestionForm from './QuestionForm'
import QuestionPage from './QuestionPage'
import UsersList from './UsersList'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Navibar from './Navibar'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <Router>
         <LoadingScreen
         loading={this.props.loading}
         spinnerColor='#c7be16'
         textColor='#676767'
         logoSrc= {logo}
         text='Loading...'>
           {this.props.loading === true
             ? null
             : <div>
               <Navibar />
               <Switch>
               <Route path='/' exact
                render={() => { return this.props.authedUser !== null ? <QuestionsList/> : <Redirect to='/login'/> }}/>
               <Route path='/add'
                render={() => { return this.props.authedUser !== null ? <QuestionForm/> : <Redirect to='/login'/> }}/>
               <Route path='/leaderboard'
               render={() => { return this.props.authedUser !== null ? <UsersList/> : <Redirect to='/login'/> }}/>
               <Route path='/questions/:id'
               render={(match) => { return this.props.authedUser !== null ? <QuestionPage {...match}/> : <Redirect to='/login'/> }}/>
               <Route path='/login' component={Login}/>
               </Switch>
               </div>}
        </LoadingScreen>
      </Router>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser }) {
  return {
    loading: Object.keys(questions).length === 0 || Object.keys(users).length === 0,
    authedUser
  }
}
export default connect(mapStateToProps)(App)
