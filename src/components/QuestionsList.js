import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'

function QuestionsList (props) {
  const userQuestions = props.users[props.authedUser].answers
  const sortedQuestions = Object.values(props.questions).sort(function (a, b) {
    return b.timestamp - a.timestamp
  })
  return (

            <Container>
              <Row>
                <Col>
                <Tabs id="controlled-tab">
                <Tab eventKey="unanswered" title="Unanswered Questions">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                  >
                  {sortedQuestions.map((question) => {
                    if ((question.id in userQuestions) === false) {
                      return <Question questionid={question.id} key={question.id}/>
                    }
                    return null
                  })
                  }
                  </Grid>
                  </Tab>
                  <Tab eventKey="answered" title="Answered Questions" >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                  >
                    {sortedQuestions.map((question) => {
                      if ((question.id in userQuestions) === true) {
                        return <Question questionid={question.id} key={question.id}/>
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

function mapStateToProps ({ questions, users, authedUser }) {
  return {
    questions: questions,
    users: users,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(QuestionsList)
