import { ADD_VOTE, VOTE_ADDED } from '../actions/vote';
import { INIT_STATE } from '../actions/init';

// This is empty, as data is fetched from the backend
const initialState = {};

function question(state = initialState, action) {
	switch (action.type) {
		case INIT_STATE:
			return Object.assign({}, action.state);
		case VOTE_ADDED:
			state.votes.push(action.vote);
			return Object.assign({}, state);
		case ADD_VOTE:
			return Object.assign({}, state, {})
		default:
			return state;

	}
}

export default question;
