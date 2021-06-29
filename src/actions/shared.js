import { getQuestions } from './questions'
import { getUsers } from './users'
import { getData, saveQuestionAnswer, saveQuestion } from '../utils/api'

export const SAVE_ANSWER = 'SAVE_ANSWER'
export const NEW_QUESTION = 'NEW_QUESTION'

export function handleInitialData () {
  return (dispatch) => {
    return getData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions)) // this will probably need to change, I will have a login page first
      })
  }
}

function saveAnswer ({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveAnswer (info) {
  return (dispatch) => {
    return saveQuestionAnswer(info).then(() => {
      dispatch(saveAnswer(info))
    }).catch((e) => {
      console.warn('Error in saving answer: ', e)
    })
  }
}

function newQuestion (question) {
  return {
    type: NEW_QUESTION,
    question
  }
}

export function handleNewQuestion (info) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestion({ ...info, author: authedUser }).then((question) => {
      dispatch(newQuestion(question))
    }).catch((e) => {
      console.warn('Error in saving question: ', e)
    })
  }
}
