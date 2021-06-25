import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'

class Question extends Component {
  render () {
    const img = this.props.users[this.props.question.author].avatarURL

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '25rem' }}>
        <CardHeader
        avatar={
          <Avatar src={process.env.PUBLIC_URL + '/avatars/' + img } />
        }
        title={this.props.users[this.props.question.author].name + ' asks...'}
        style = {{ background: '#e8eaed', fontSize: 'large' }}
        />
        <CardContent>
          <Typography variant="h6" component="h6" style={{ padding: '10px', fontWeight: 'bold', color: 'black' }}>Would you rather </Typography>
          <Box border={0} borderRadius={16} style= {{ background: '#e8eaed' }}>
          <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '5px' }}>{this.props.question.optionOne.text}</Typography>
           </Box>
          <Typography variant= "body1" component="div" style={{ textAlign: 'center', fontWeight: 'bold', padding: '5px' }}>OR</Typography>
          <Box border={0} borderRadius={16} style= {{ background: '#e8eaed' }}>
          <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '5px' }}>{this.props.question.optionTwo.text}</Typography>
          </Box>
          <Button variant="contained" color='primary' style={{ marginTop: '10px', marginBottom: '10px', float: 'right' }}>View poll</Button>
        </CardContent>

      </Card>
      </div>

    )
  }
}

// add link to question in view poll

function mapStateToProps ({ users, questions, authedUser }, { questionid }) {
  return {
    users: users,
    authedUser: authedUser,
    question: questions[questionid]
  }
}

export default connect(mapStateToProps)(Question)
