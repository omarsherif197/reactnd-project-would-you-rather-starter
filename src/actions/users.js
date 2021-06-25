
export const GET_USERS = 'GET_USERS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function getUsers (users) {
  return {
    type: GET_USERS,
    users
  }
}

export function saveAnswer ({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}
