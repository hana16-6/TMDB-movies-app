import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from './actionTypes'
import axios from 'axios'
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the users
                const users = response.data
                console.log(users)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}


export const fetchUsersRequest = () => {
    return {
        type: FETCH_MOVIE_REQUEST
    }
}
export const fetchUsersSuccess = movies => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movies
    }
}
export const fetchUsersFailure = error => {
    return {
        type: FETCH_MOVIE_FAILURE,
        payload: error
    }
}