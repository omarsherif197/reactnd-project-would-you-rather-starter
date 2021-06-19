import {_getUsers, _getQuestions} from "./_DATA"


function getData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
      ]).then(([users, questions]) => ({
        users,
        questions,
      }))
    }