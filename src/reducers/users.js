import { LINK_ANSWER, LINK_QUESTION, RECIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case LINK_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.question])
                }
            }
        case LINK_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.question]: action.answer
                    }
                }
            }
        default:
            return state
    }
}