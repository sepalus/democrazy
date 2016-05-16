const ADD_CANDIDATE = "ADD_CANDIDATE";
const initialState = {
		status:"initial",
		count:0,
		candidates: [
			{
				id: '1',
				title: 'Lorem',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
			},
			{
				id: '2',
				title: 'Ipsum',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
			},
			{
				id: '3',
				title: 'Lorem',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
			}
		]
	};

function question(state = initialState, action) {
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

export default question;
