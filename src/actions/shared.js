import { getQuestions } from './questions'
import { getUsers } from './users'
import { getData } from '../utils/api'
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
