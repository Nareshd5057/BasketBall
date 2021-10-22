import { createStore } from 'redux'
import Player from './../Model/Player'

/* COMMON PLAYER REDUCER */
const playerReducer = (
	state = {
		player: new Player(),
		players: [],
	},
	action
) => {
	let newState = action.newState
	//INPUT CHANGE CHECK
	if (action.type === 'inputChange') {
		return {
			player: newState,
			players: state.players,
		}
	}
	//SAVE CHECK
	if (action.type === 'savePlayes') {
		return {
			player: state.player,
			players: [...state.players, JSON.parse(action.newPlayer)],
		}
	}
	return state
}

/* REDUX STORE INITIALIZE */
const store = createStore(playerReducer)

export default store
