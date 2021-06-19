import { getQuestions } from "./questions";
import { getUsers } from "./users";
import {getData } from "../utils/api"

export function handleInitialData () {
    return (dispatch) => {
        return getData()
        .then(({users, questions}) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
            //might add set_authed_user here
        })
    }
}