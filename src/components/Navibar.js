import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/authedUser'

function Navibar (props) {
  const logout = () => {
    props.dispatch(logOutUser())
  }

  return (
        <Navbar bg='dark' variant='dark'>
          <Nav>
            <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/add'>
            <Nav.Link>New Question</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/leaderboard'>
            <Nav.Link>Leaderboard</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={() => { logout() }}>Log Out</Nav.Link>
          </Nav>
          <Nav style= {{ display: 'flex', justifyContent: 'end' }}>
            <Nav.Link disabled> {props.authedUser !== null ? ('Hello, ' + props.authedUser) : '' } </Nav.Link>
          </Nav>
        </Navbar>
  )
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Navibar)
