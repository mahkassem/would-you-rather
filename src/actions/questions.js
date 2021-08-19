import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { linkAnswer, linkQuestion } from './users'

export const RECIVE_QUESTIONS = 'RECIVE_QUESTIONS'
export const ADD_QUESTION = 'QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function reciveQuestions(questions) {
    return {
        type: RECIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question: question,
    }
}

function answerQuestion(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION,
        qid: qid,
        answer: answer,
        authedUser: authedUser,
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser: authedUser,
            qid: qid,
            answer: answer,
        })
            .then(() => dispatch(answerQuestion(authedUser, qid, answer)))
            .then(() => dispatch(linkAnswer(qid, answer, authedUser)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())
        return saveQuestion({
            optionOneText: optionOneText,
            optionTwoText: optionTwoText,
            author: authedUser,
        })
            .then((question) => dispatch(addQuestion(question), linkQuestion(question.id, question.author)))
            .then(() => dispatch(hideLoading()))

    }
}