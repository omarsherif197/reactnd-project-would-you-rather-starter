import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography, Button, Backdrop } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import { handleNewQuestion } from '../actions/questions'
import { connect } from 'react-redux'

class QuestionForm extends Component {
    state= {
      optionOne: '',
      optionTwo: '',
      errorOne: false,
      errorTwo: false,
      loading: false
    }

    updateOptionOne = (val) => {
      this.setState(() => ({
        optionOne: val
      }))
    }

    updateOptionTwo = (val) => {
      this.setState(() => ({
        optionTwo: val
      }))
    }

    handleSubmit = () => {
      const errorone = this.state.optionOne === ''
      const errortwo = this.state.optionTwo === ''
      if (errorone || errortwo) {
        this.setState(() => ({
          errorOne: errorone,
          errorTwo: errortwo
        }))
      } else {
        const { optionOne, optionTwo } = this.state
        this.setState(() => ({
          loading: true
        }), () => {
          this.props.dispatch(handleNewQuestion({ optionOneText: optionOne, optionTwoText: optionTwo })).then(() => {
            this.setState(() => ({
              optionOne: '',
              optionTwo: '',
              errorone: false,
              errortwo: false,
              loading: false
            }))
          })
        })
      }
    }

    render () {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container style={{ width: '40%', border: '1.5px solid grey', borderRadius: '12px' }}>
                <Grid item xs={12} style= {{ borderBottom: '1.5px solid grey', textAlign: 'center', background: '#e8eaed', borderRadius: '12px 12px 0px 0px' }}>
                    <Typography variant='h6' component='h6'>Create New Question</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography variant='subtitle2' style={{ marginLeft: '1em', padding: '3px' }} >Complete the question: </Typography>
                <Typography variant='h6' component='h6' style={{ marginLeft: '0.7em', fontWeight: 'bold', padding: '3px', marginBottom: '5px' }}>Would you rather...</Typography>
                <form noValidate autoComplete='off'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
                    <TextField
                        error={this.state.errorOne}
                        id="outlined-textarea"
                        label="Option One"
                        placeholder="Enter option one here"
                        multiline
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          shrink: true
                        }}
                        onChange={(event) => { this.updateOptionOne(event.target.value) }}
                        value={this.state.optionOne}
                        helperText={this.state.errorOne ? 'Field can\'t be empty' : ''}
                    />
                    </div>
                    <Typography variant= "body1" component="div" style={{ textAlign: 'center', fontWeight: 'bold', padding: '5px' }}>OR</Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
                    <TextField
                        error={this.state.errorTwo}
                        id="outlined-textarea"
                        label="Option Two"
                        placeholder="Enter option two here"
                        multiline
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          shrink: true
                        }}
                        onChange={(event) => { this.updateOptionTwo(event.target.value) }}
                        value={this.state.optionTwo}
                        helperText={this.state.errorTwo ? 'Field can\'t be empty' : ''}
                    />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
                    <Button onClick={this.handleSubmit} variant="contained" color='primary' style={{ marginTop: '10px', marginBottom: '10px', float: 'center', justifyContent: 'center', width: '50%' }}>
                        Submit
                    </Button>
                    <Backdrop open={this.state.loading} style={{ color: '#fff', zIndex: 1201 }}>
                    <CircularProgress />
                </Backdrop>
                    </div>
                </form>
                </Grid>
            </Grid>
        </div>
      )
    }
}

export default connect()(QuestionForm)
