import { ADD_VOTE, VOTE_ADDED,  ADD_QUESTION, QUESTION_ADDED, INIT_STATE, TOKEN} from '../constants';

// This is empty, as data is fetched from the backend
const initialState = {
	question: '',
	asker: '',
	candidates: [],
	votes: [],
};

function question(state = initialState, action) {
	switch (action.type) {
		case INIT_STATE:

			if(localStorage) localStorage.setItem(TOKEN, action.token);

			return {
				question: action.state.question,
				asker: action.state.asker,
				candidates: action.state.candidates,
				votes: [].concat(action.state.votes)
			}
		case VOTE_ADDED:


			return {
				question: state.question,
				asker: state.asker,
				candidates: state.candidates,
				votes: [].concat(state.votes, action.vote)
			}
		case ADD_VOTE:
			return {
				question: state.question,
				asker: state.asker,
				status: 'LOADING',
				candidates: state.candidates,
				votes: state.votes
			}
		case ADD_QUESTION:
			return {
				question: action.question.question,
				asker: action.question.asker,
				candidates: action.question.candidates,
				votes: [],
				status:'LOADING'

			}
		case QUESTION_ADDED:
			return {
				question: action.question.question,
				asker: action.question.asker,
				candidates: action.question.candidates,
				votes: []	
			}
		default:
			return state;

	}
}

export default question;
