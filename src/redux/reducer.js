import {NEXT_PAGE,ADD_PROGRESS,REMOVE_PROGRESS,RESET_PROGRESS,GET_ANSWER, REMOVE_ANSWER} from './actions'
import preload from '../../public/routerdata.json'

console.log(preload)
const initialState = {
	page: "PRICE_QUESTION",
	PRICE_QUESTION: "",
	ROOM_QUESTION: '',
	NUM_DEVICES_QUESTION: '',
	PARENTAL_QUESTION: '',
	FREQUENCY_QUESTION: '',
	DATA_TRANSFER_QUESTION: '',
	LAN_PORT_QUESTION: '',
	routers: preload,
	progress: 0
}

const addAnswer = (state, action) => {
	let add = {}
	add[action.payload.question] = action.payload.answer
	return Object.assign({}, state, add)
}

const removeAnswer = (state, action) => {
	console.log(action)
	let remove = {}
	remove[action.payload] = ''
	return Object.assign({}, state, remove)
}

const setPage = (state, action) => {

	return Object.assign({}, state, {page: action.payload.page})
}

const setProgress = (state, action) => {
	let newProgress = state.progress
	console.log(state)
	if(action.type === 'ADD_PROGRESS') {
		newProgress += action.payload
	} else if(action.type === 'REMOVE_PROGRESS') {
		newProgress -= action.payload
	}

	return Object.assign({}, state, {progress: newProgress})
}
const reset = (state, action) => {
	return Object.assign({}, state, initialState)
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT_PAGE:
			return setPage(state, action)
		case ADD_PROGRESS:
			return setProgress(state, action)
		case REMOVE_PROGRESS:
			return setProgress(state, action)
		case RESET_PROGRESS:
			return reset(state, action)
		case GET_ANSWER:
			return addAnswer(state, action)
		case REMOVE_ANSWER:
			return removeAnswer(state, action)
		default:
			return state
	}
}

export default rootReducer
