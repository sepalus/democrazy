import { ADD_VOTE, VOTE_ADDED } from '../actions/vote';
import { INIT_STATE } from '../actions/init';

// This is empty, as data is fetched from the backend
const initialState = {
	text: '',
	candidates: [],
	votes: []
};

function question(state = initialState, action) {
	switch (action.type) {
		case INIT_STATE:
		return {
			text: action.state.text,
			candidates: action.state.candidates,
			votes: [].concat(action.state.votes)
		}
		case VOTE_ADDED:
			return {
				text: state.text,
				candidates: state.candidates,
				votes: [].concat(state.votes, action.vote)
			}
		case ADD_VOTE:
		return {
			text: state.text,
			status: 'LOADING',
			candidates: state.candidates,
			votes: [].concat(state.votes, action.vote)
		}
		default:
			return state;

	}
}

export default question;
