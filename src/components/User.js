import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'

class User extends Component {
  render () {
    const img = this.props.user.avatarURL
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '25rem' }}>
        <CardHeader
        avatar={
          <Avatar src={process.env.PUBLIC_URL + '/avatars/' + img } />
        }
        title={this.props.user.name}
        subheader={'#' + (this.props.index + 1)}
        style = {{ background: '#e8eaed', fontSize: 'large' }}
        />
        <CardContent>
          <Typography variant= "body1" component="div" style={{ textAlign: 'center', fontWeight: 'bold', padding: '5px' }}>Asked questions: </Typography>
          <Box border={0} borderRadius={16} style= {{ background: '#e8eaed' }}>
          <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '5px' }}>{this.props.user.questions.length}</Typography>
           </Box>
          <Typography variant= "body1" component="div" style={{ textAlign: 'center', fontWeight: 'bold', padding: '5px' }}>Answered questions: </Typography>
          <Box border={0} borderRadius={16} style= {{ background: '#e8eaed' }}>
          <Typography variant= "body1" component="div" style={{ textAlign: 'center', padding: '5px' }}>{Object.keys(this.props.user.answers).length}</Typography>
          </Box>
        </CardContent>

      </Card>
      </div>
    )
  }
}

function mapStateToProps ({ users }, { id }) {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(User)
