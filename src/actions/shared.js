import { getQuestions, saveVote } from './questions'
import { getUsers, saveAnswer } from './users'
import { getData, saveQuestionAnswer } from '../utils/api'
import { setAuthedUser } from './authedUser'

export function handleInitialData () {
  return (dispatch) => {
    return getData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(setAuthedUser('sarahedo')) // this will probably need to change, I will have a login page first
      })
  }
}

export function handleSaveAnswer (info) {
  return (dispatch) => {
    return saveQuestionAnswer(info).then(() => {
      dispatch(saveAnswer(info))
      dispatch(saveVote(info))
    }).catch((e) => {
      console.warn('Error in saving answer: ', e)
    })
  }
}
