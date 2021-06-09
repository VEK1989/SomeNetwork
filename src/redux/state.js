let renderEntireTree = () => { }

const state = {
	wallPage: {
		postData: [
			{
				id: 1,
				massage: "Hello my friend",
				likeCount: 3
			},
			{
				id: 2,
				massage: "How are you",
				likeCount: 43
			},
			{
				id: 3,
				massage: "It's me!",
				likeCount: 12
			}
		],
		newPostText: ""
	},
	messagePage: {
		chatData: [
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
			{
				id: 4,
				name: "Katya",
			},
			{
				id: 5,
				name: "Sergey",
			},
			{
				id: 6,
				name: "Viktor",
			},
		],
		messageData: [
			{
				id: 1,
				message: "Hi! How are you",
			},
			{
				id: 2,
				message: "Hello",
			},
			{
				id: 3,
				message: "You made a cool project",
			},
			{
				id: 4,
				message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati sint doloremque, molestiae placeat commodi ducimus ut rem vitae officiis repudiandae libero tempora illum eos totam quaerat! Alias, voluptas assumenda.",
			},
		],
		messageText: ""
	},
	sideBar: {
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
}

window.state = state

export let addNewPost = () => {
	let newPost = {
		id: state.wallPage.postData.length + 1,
		message: state.wallPage.newPostText,
		likeCount: 0,
	}

	state.wallPage.postData.push(newPost)
	state.wallPage.newPostText = ''
	renderEntireTree(state)
}

export let modePostText = (newText) => {
	state.wallPage.newPostText = newText
	renderEntireTree(state)
}

export let sendNewMessage = () => {
	let newMessage = {
		id: state.messagePage.messageData.length + 1,
		message: state.messagePage.messageText,
	}

	state.messagePage.messageData.push(newMessage)
	state.messagePage.messageText = ''
	renderEntireTree(state)
}

export let modeMessageText = (newTextMessage) => {
	state.messagePage.messageText = newTextMessage
	renderEntireTree(state)
}

export const subscribe = (observer) => {
	renderEntireTree = observer
}

export default state;