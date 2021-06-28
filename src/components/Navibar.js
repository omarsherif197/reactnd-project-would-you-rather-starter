import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/authedUser'

class Navibar extends Component {
  logout = () => {
    this.props.dispatch(logOutUser())
  }

  render () {
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
            <Nav.Link onClick={() => { this.logout() }}>Log Out</Nav.Link>
          </Nav>
        </Navbar>
    )
  }
}

export default connect()(Navibar)
