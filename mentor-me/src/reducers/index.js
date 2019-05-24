import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    GET_QUESTION_START,
    GET_QUESTION_SUCCESS,
    GET_QUESTION_FAILURE,
    ADD_QUESTION_START,
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION_FAILURE,
    UPDATE_QUESTION_START,
    UPDATE_QUESTION_SUCCESS,
    UPDATE_QUESTION_FAILURE,
    DELETE_QUESTION_START,
    DELETE_QUESTION_SUCCESS,
    DELETE_QUESTION_FAILURE,
    SEARCH_QUESTION_START,
    SEARCH_QUESTION_SUCCESS,
    SEARCH_QUESTION_FAILURE
} from '../actions'

const initialState = {
    questions: [],
    isLoggingIn: false,
    isSignedUp: false,
    inUserPage: false,
    fetchingQuestions: false,
    addingQuestions: false,
    searchQuestions: false,
    editingQuestions: false,
    deletingQuestions: false,
    updateQuestion: null,
    search: '',
    tabs: ['all', 'Photography', 'Programming', 'Small Business', 'Video Editing']
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_START:
            return {
                ...state,
                isSignedUp: true,
                isLoggingIn: true,
                inUserPage: false,
                error: ''
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSignedUp: false,
                isLoggingIn: false,
                inUserPage: true,
                error: ''
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSignedUp: false,
                isLoggingIn: false,
                inUserPage: false,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                inUserPage: false,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                inUserPage: true,
                error: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                inUserPage: false,
                error: action.payload
            };
        case GET_QUESTION_START:
            return {
                ...state,
                fetchingQuestions: true,
                inUserPage: true,
                error: ''
            };
        case GET_QUESTION_SUCCESS:
            return {
                ...state,
                fetchingQuestions: false,
                inUserPage: true,
                questions: action.payload,
                error: ''
            };
        case GET_QUESTION_FAILURE:
            return {
                ...state,
                fetchingQuestions: false,
                inUserPage: true,
                error: action.payload
            };
        case ADD_QUESTION_START:
            return {
                ...state,
                addingQuestions: true,
                inUserPage: true,
                error: ''
            };
        case ADD_QUESTION_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                addingQuestions: false,
                inUserPage: true,
                questions: [
                    ...state.questions,
                    { content: action.payload.content, topic: action.payload.topic, updated_at: Date.now() }
                ],
                error: ''
            };
        case ADD_QUESTION_FAILURE:
            return {
                ...state,
                addingQuestions: false,
                inUserPage: true,
                error: action.payload
            };
        case SEARCH_QUESTION_START:
            return {
                ...state,
                searchQuestions: true,
                inUserPage: true,
                error: ''
            };
        case SEARCH_QUESTION_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                searchQuestions: false,
                inUserPage: true,
                questions: action.payload,
                error: ''
            };
        case SEARCH_QUESTION_FAILURE:
            return {
                ...state,
                searchQuestions: false,
                inUserPage: true,
                error: action.payload
            };
        case UPDATE_QUESTION_START:
            return {
                ...state,
                editingQuestions: true,
                inUserPage: true,
                error: ''
            };
        case UPDATE_QUESTION_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                editingQuestions: false,
                inUserPage: true,
                questions: action.payload,
                error: ''
            };
        case UPDATE_QUESTION_FAILURE:
            return {
                ...state,
                editingQuestions: false,
                inUserPage: true,
                error: action.payload
            };
        case DELETE_QUESTION_START:
            return {
                ...state,
                deletingQuestions: true,
                inUserPage: true,
                error: ''
            };
        case DELETE_QUESTION_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                deletingQuestions: false,
                inUserPage: true,
                questions: action.payload,
                // questions:[
                //     ...state.questions,
                //     {content:action.payload.content,topic:action.payload.topic,updated_at:Date.now()}
                // ],
                error: ''
            };
        case DELETE_QUESTION_FAILURE:
            return {
                ...state,
                deletingQuestions: false,
                inUserPage: true,
                error: action.payload
            };
        default:
            return state
    }
}