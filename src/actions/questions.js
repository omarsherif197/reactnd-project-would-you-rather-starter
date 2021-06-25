
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_VOTE = 'SAVE_VOTE'

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
