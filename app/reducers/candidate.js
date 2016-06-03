import { NEW_CANDIDATE, REMOVE_CANDIDATE} from '../constants';

const initialState = {
	newCandidates: [],
	valid: false
};

function candidate(state = initialState, action) {
	switch (action.type) {
		case NEW_CANDIDATE:
			return {
				newCandidates: [].concat(action.candidates, action.candidate),
			}
		case REMOVE_CANDIDATE:
			let index = state.newCandidates.indexOf(action.candidate);
			return {
				newCandidates: [].concat(state.newCandidates.slice(0, index), state.newCandidates.slice(index+1)),
			}
		default:
			return state;

	}
}

export default candidate;