import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'

class QuestionsList extends Component {
  render () {
    const userQuestions = this.props.users[this.props.authedUser].answers
    return (

            <Container>
              <Row>
                <Col>
                <Tabs id="controlled-tab">
                  <Tab eventKey="answered" title="Answered Questions" >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                  >
                    {Object.keys(this.props.questions).map((question) => {
                      if ((question in userQuestions) === true) {
                        return <Question questionid={question}/>
                      }
                      return null
                    })
                    }
                    </Grid>
                  </Tab>
                  <Tab eventKey="unanswered" title="Unanswered Questions">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                  >
                  {Object.keys(this.props.questions).map((question) => {
                    if ((question in userQuestions) === false) {
                      return <Question questionid={question}/>
                    }
                    return null
                  })
                  }
                  </Grid>
                  </Tab>
                </Tabs>
                </Col>
              </Row>
            </Container>

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
