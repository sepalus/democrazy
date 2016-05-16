const ADD_CANDIDATE = "ADD_CANDIDATE";
const initialState = {
		status:"initial",
		count:0
	};

function candidate(state = initialState, action) {
	switch (action.type) {
		case ADD_CANDIDATE:
			return {
				status:"voteAdded",
				count:state.count+1
			};
	
		default:
			return state;

	}
}

export default candidate;
