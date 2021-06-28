import { saveQuestion } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_VOTE = 'SAVE_VOTE'
export const NEW_QUESTION = 'NEW_QUESTION'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function saveVote ({ authedUser, qid, answer }) {
  return {
    type: SAVE_VOTE,
    authedUser,
    qid,
    answer
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
