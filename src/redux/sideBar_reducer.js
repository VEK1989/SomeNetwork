let initialState = {
	friends: [
		{
			id: 1,
			name: "Andrey",
		},
		{
			id: 2,
			name: "Olga",
		},
		{
			id: 3,
			name: "Igor",
		},
	],
}

const sideBarReducer = (state = initialState, action) => {
	return state
}

export default sideBarReducer;