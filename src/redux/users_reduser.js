import { followed, getUsers, unFollowed } from '../api/api';

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHIG = 'TOGGLE_IS_FETCHIG'

let initialState = {
	users: [],
	currentSize: 10,
	pageSize: 5,
	totalUsers: 0,
	currentPage: 1,
	isFetching: true
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_USER:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}

		case UNFOLLOW_USER:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}

		case SET_USERS:
			return { ...state, users: action.users }

		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currentPage
			}

		case SET_TOTAL_USERS:
			return {
				...state, totalUsers: action.totalUsers
			}

		case TOGGLE_IS_FETCHIG:
			return {
				...state, isFetching: action.isFetching
			}

		default:
			return state
	}
}

export const follow = (userId) => ({ type: FOLLOW_USER, userId })
export const unFollow = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHIG, isFetching })

export const getAllNeedUsers = (currentPage, currentSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		getUsers(currentPage, currentSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsers(data.totalCount))
		});
	}
}

export const getNewPageUsers = (pageNumber, currentSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		dispatch(setCurrentPage(pageNumber))
		getUsers(pageNumber, currentSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
		});
	}
}

export const getAcceptFollow = (userId) => {
	return (dispatch) => {
		followed(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(follow(userId))
			}
		});
	}
}

export const getUnAcceptFollow = (userId) => {
	return (dispatch) => {
		unFollowed(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unFollow(userId))
			}
		});
	}
}

export default usersReducer;