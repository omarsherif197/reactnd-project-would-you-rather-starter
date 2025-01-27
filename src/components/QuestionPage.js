import React from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import CircularProgress from '@material-ui/core/CircularProgress'
import { handleSaveAnswer } from '../actions/shared'
import { Redirect } from 'react-router-dom'

function CircularProgressWithLabel (props) {
  return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
  )
}
;

function QuestionPage (props) {
  if (!props.question) {
    return (
      <Redirect to='/404'/>
    )
  }

  const answer = (option) => {
    const { dispatch, authedUser, question } = props
    dispatch(handleSaveAnswer({ authedUser, qid: question.id, answer: option }))
  }

  const notAnswered = () => (
        <CardContent>
              <Typography varsiant="h6" component="h6" style={{ padding: '10px', fontWeight: 'bold', color: 'black' }}>Would you rather </Typography>
              <Box border={0} borderRadius={16} style= {{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={() => { answer('optionOne') }} style={{ borderRadius: '12px', background: '#e8eaed', width: '300px', textTransform: 'lowercase' }}>
                    <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '5px' }}>{props.question.optionOne.text}</Typography>
                </Button>
               </Box>
              <Typography variant= "body1" component="div" style={{ textAlign: 'center', fontWeight: 'bold', padding: '5px' }}>OR</Typography>
              <Box border={0} borderRadius={16} style= {{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={() => { answer('optionTwo') }} style={{ borderRadius: '12px', background: '#e8eaed', width: '300px', textTransform: 'lowercase' }}>
                    <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '5px' }}>{props.question.optionTwo.text}</Typography>
                </Button>
              </Box>
            </CardContent>
  )

  const answered = (question, option) => {
    const votesForOne = question.optionOne.votes.length
    const votesForTwo = question.optionTwo.votes.length
    const totalVotes = votesForOne + votesForTwo

    return (
        <CardContent>
              <Typography variant="h6" component="h6" style={{ padding: '10px', fontWeight: 'bold', color: 'black' }}>Would you rather </Typography>
              <Box border={0} borderRadius={16} style= {{ display: 'flex', justifyContent: 'center' }}>
                <Badge color="secondary" badgeContent={option === 'optionOne' ? 'Your vote' : 0}>
                <Button style={{ borderRadius: '12px', background: '#e8eaed', width: '300px', textTransform: 'lowercase' }} disabled>
                    <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '5px' }}>{props.question.optionOne.text}</Typography>
                </Button>
                </Badge>
               </Box>
               <Box border={0} borderRadius={16} style= {{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
               <CircularProgressWithLabel value={votesForOne * 100 / totalVotes} style={{ display: 'flex', justifyContent: 'center' }}/>
               </Box>
               <Box border={0} borderRadius={16} style= {{ display: 'flex', justifyContent: 'center', padding: '1px' }}>
               <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '1px' }}>{votesForOne} out of {totalVotes} votes</Typography>
               </Box>
              <Typography variant= "body1" component="div" style={{ textAlign: 'center', fontWeight: 'bold', padding: '5px' }}>OR</Typography>
              <Box border={0} borderRadius={16} style= {{ display: 'flex', justifyContent: 'center' }}>
                <Badge color="secondary" badgeContent={option === 'optionTwo' ? 'Your vote' : 0}>
                <Button style={{ borderRadius: '12px', background: '#e8eaed', width: '300px', textTransform: 'lowercase' }} disabled>
                    <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '5px' }}>{props.question.optionTwo.text}</Typography>
                </Button>
                </Badge>
              </Box>
              <Box border={0} borderRadius={16} style= {{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
               <CircularProgressWithLabel value={votesForTwo * 100 / totalVotes} style={{ display: 'flex', justifyContent: 'center' }}/>
               </Box>
               <Box border={0} borderRadius={16} style= {{ display: 'flex', justifyContent: 'center', padding: '1px' }}>
               <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '1px' }}>{votesForTwo} out of {totalVotes} votes</Typography>
               </Box>
            </CardContent>
    )
  }

  const img = props.users[props.question.author].avatarURL
  const question = props.question.id
  return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '25rem' }}>
        <CardHeader
        avatar={
          <Avatar src={process.env.PUBLIC_URL + '/avatars/' + img } />
        }
        title={props.users[props.question.author].name + ' asks...'}
        style = {{ background: '#e8eaed', fontSize: 'large' }}
        />
        {
            Object.keys(props.users[props.authedUser].answers).includes(question)
              ? answered(props.question, props.users[props.authedUser].answers[question])
              : notAnswered()
        }
      </Card>
      </div>
  )
}

function mapStateToProps ({ users, questions, authedUser }, props) {
  const { id } = props.match.params
  return {
    users: users,
    authedUser: authedUser,
    question: questions[id] // change this to take in questionid prop
  }
}

export default connect(mapStateToProps)(QuestionPage)
