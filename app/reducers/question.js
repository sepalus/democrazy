import { ADD_VOTE, VOTE_ADDED, INIT_STATE, TOKEN} from '../constants';

// This is empty, as data is fetched from the backend
const initialState = {
	text: '',
	candidates: [],
	votes: []
};

function question(state = initialState, action) {
	switch (action.type) {
		case INIT_STATE:

			if(localStorage) localStorage.setItem(TOKEN, action.token);

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
				votes: state.votes
			}
		default:
			return state;

	}
}

export default question;
