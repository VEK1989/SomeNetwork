import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { addNewPost, modePostText, sendNewMessage, modeMessageText, subscribe } from './redux/state';

let renderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} addNewPost={addNewPost} modePostText={modePostText} sendNewMessage={sendNewMessage} modeMessageText={modeMessageText} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderEntireTree(state)

subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
