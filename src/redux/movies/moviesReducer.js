import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from './actionTypes'

const initialState = {
    loading: false,
    movies: [],
    error: ''
}
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                error: ""

            }
        case FETCH_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                movies: [],
                error: action.payload

            }
        default: return state
    }
}
export default moviesReducer;