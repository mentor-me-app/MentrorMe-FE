import axios from 'axios'
import {axiosWithAuth} from '../axiosWithAuth'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({type:LOGIN_START});
    return axios
    .post('https://mentor-me-app-be.herokuapp.com/api/users/login',creds)
    .then(res => {
        localStorage.setItem('token',res.data.token)
        dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
        console.log('login token ',res)
    })
    .catch(err => {
        dispatch({type:LOGIN_FAILURE,payload:`${err}`})
        console.log('login error in actions ',err)
    })
}

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signup = creds => dispatch => {
    dispatch({type:SIGNUP_START});
    return axios
    .post('https://mentor-me-app-be.herokuapp.com/api/users/register',creds)
    .then(res => {
        localStorage.setItem('token',res.data.token)
        dispatch({type:SIGNUP_SUCCESS,payload:res.data.token})
        console.log('signup token ',res)
    })
    .catch(err => {
        dispatch({type:SIGNUP_FAILURE,payload:err})
        console.log('signin error in actions ',err)
    })
}

export const GET_QUESTION_START = 'GET_QUESTION_START'
export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS'
export const GET_QUESTION_FAILURE = 'GET_QUESTION_FAILURE'

export const getQuestion = () => dispatch => {
    dispatch({ type:GET_QUESTION_START})
    return axiosWithAuth()
    .get('https://mentor-me-app-be.herokuapp.com/api/questions')
    .then(res => {
        dispatch({ type:GET_QUESTION_SUCCESS,payload:res.data})
        console.log(res)
        console.log('get question header info ',res)
    })
    .catch(err => {
        dispatch({ type:GET_QUESTION_FAILURE,payload:err})
        console.log('action get question start error '+err)
    })
}

export const ADD_QUESTION_START = 'ADD_QUESTION_START'
export const ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS'
export const ADD_QUESTION_FAILURE = 'ADD_QUESTION_FAILURE'

export const addQuestion = (newQuestion) => dispatch => {
  console.log('action addQuestion data ',newQuestion)
  dispatch({ type: ADD_QUESTION_START })
  return axiosWithAuth()
    .post('https://mentor-me-app-be.herokuapp.com/api/questions', newQuestion)
    .then(res => {
      dispatch({ type: ADD_QUESTION_SUCCESS, payload: res.data.message })
      console.log('add Question ', res.data)
    })
    .catch(err => {
      dispatch({ type: ADD_QUESTION_FAILURE, payload: err.response })
      console.log('add Question error: ', err.response)
    })
}

export const SEARCH_QUESTION_START = 'SEARCH_QUESTION_START'
export const SEARCH_QUESTION_SUCCESS = 'SEARCH_QUESTION_SUCCESS'
export const SEARCH_QUESTION_FAILURE = 'SEARCH_QUESTION_FAILURE'

export const searchQuestion = (search) => dispatch => {
  console.log('action searchQuestion data ',search)
  dispatch({ type: SEARCH_QUESTION_START })
  return axiosWithAuth()
    .get(`https://mentor-me-app-be.herokuapp.com/api/questions?search=${search}`)
    .then(res => {
      dispatch({ type: SEARCH_QUESTION_SUCCESS, payload: res.data })
      console.log('search Question ', res.data)
    })
    .catch(err => {
      dispatch({ type: SEARCH_QUESTION_FAILURE, payload: err.response })
      console.log('search Question error: ', err.response)
    })
}

//.delete(api/questions/:id) - delete
export const DELETE_QUESTION_START = 'DELETE_QUESTION_START'
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS'
export const DELETE_QUESTION_FAILURE = 'DELETE_QUESTION_FAILURE'

export const deleteQuestion = (id) => dispatch => {
  console.log('action deleteQuestion data ',id)
  dispatch({ type: DELETE_QUESTION_START })
  return axiosWithAuth()
    .delete(`https://mentor-me-app-be.herokuapp.com/api/questions/${id}`)
    .then(res => {
      dispatch({ type: DELETE_QUESTION_SUCCESS, payload: res.data })
      console.log('delete Question ', res.data)
    })
    .catch(err => {
      dispatch({ type: DELETE_QUESTION_FAILURE, payload: err.response })
      console.log('delete Question error: ', err.response)
    })
}

//.put(api/questions/:id,updateditem)-update
export const UPDATE_QUESTION_START = 'UPDATE_QUESTION_START'
export const UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS'
export const UPDATE_QUESTION_FAILURE = 'UPDATE_QUESTION_FAILURE'

export const updateQuestion = (updatedItem) => dispatch => {
  console.log('action updateQuestion data ',updatedItem)
  dispatch({ type: UPDATE_QUESTION_START })
  return axiosWithAuth()
    .put(`https://mentor-me-app-be.herokuapp.com/api/questions/${updatedItem.id}`,updatedItem)
    .then(res => {
      dispatch({ type: UPDATE_QUESTION_SUCCESS, payload: res.data })
      console.log('update Question ', res.data)
    })
    .catch(err => {
      dispatch({ type: UPDATE_QUESTION_FAILURE, payload: err.response })
      console.log('update Question error: ', err.response)
    })
}