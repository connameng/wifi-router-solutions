import {NEXT_PAGE,ADD_PROGRESS,REMOVE_PROGRESS,RESET_PROGRESS,GET_ANSWER, REMOVE_ANSWER} from './actions'

const oneHundreds = 100/7

export function setCurrentPage(page) {
	let pageAndAnswer = { page }
	return {
		type: NEXT_PAGE,
		payload: pageAndAnswer
	}
}

export function setAddProgress() {
	return {
		type: ADD_PROGRESS,
		payload: oneHundreds
	}
}

export function setRemoveProgress() {
	return {
		type: REMOVE_PROGRESS,
		payload: oneHundreds
	}
}

export function setResetProgress() {
	return {
		type: RESET_PROGRESS,
		payload: 0
	}
}

export function setAnswer(answer,question) {
	let answerQuestion = {answer, question}
	return {
		type: GET_ANSWER,
		payload: answerQuestion
	}
}

export function removeAnswer(question) {
	return {
		type: REMOVE_ANSWER,
		payload: question
	}
}