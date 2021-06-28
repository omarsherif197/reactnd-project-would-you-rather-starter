import { GET_QUESTIONS, SAVE_VOTE, NEW_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_VOTE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      }
    case NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state
  }
}
