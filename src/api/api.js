import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	headers: {
		"API-KEY": "3b8654dd-8742-4aa1-9f53-4e2f1aeb03ea"
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})

export const getUsers = (currentPage, currentSize) => {
	return instance.get(`users?page=${currentPage}&count=${currentSize}`)
		.then(response => response.data)
}

export const followed = (id) => {
	return instance.post(`follow/${id}`)
		.then(response => response.data)
}

export const unFollowed = (id) => {
	return instance.delete(`follow/${id}`)
		.then(response => response.data)
}

export const getProfile = (userId) => {
	return instance.get(`profile/${userId}`)
		.then(response => response.data)
}

export const getAuthMe = () => {
	return instance.get(`auth/me`)
		.then(response => response.data)
}

export const login = (email, password, rememberMe) => {
	return instance.post('auth/login', { email, password, rememberMe })
		.then(response => response.data)
}

export const logout = () => {
	return instance.delete('auth/login')
		.then(response => response.data)
}