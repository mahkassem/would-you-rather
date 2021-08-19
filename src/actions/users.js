export const RECIVE_USERS = 'RECIVE_USERS'
export const LINK_QUESTION = 'LINK_QUESTION'
export const LINK_ANSWER = 'LINK_ANSWER'

export function reciveUsers(users) {
    return {
        type: RECIVE_USERS,
        users,
    }
}

export function linkQuestion(question, authedUser) {
    return {
        type: LINK_QUESTION,
        question: question,
        authedUser: authedUser,
    }
}

export function linkAnswer(question, answer, authedUser) {
    return {
        type: LINK_ANSWER,
        question: question,
        answer: answer,
        authedUser: authedUser,
    }
}