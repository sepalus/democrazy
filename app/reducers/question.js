import { ADD_VOTE, VOTE_ADDED } from '../actions/vote';
import { INIT_STATE } from '../actions/init';

const initialState = {
		status:"initial",
		count:0,
		text: 'What do you think?',
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
			},
			{
				id: '4',
				title: 'Lorem',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
			},
			{
				id: '5',
				title: 'Lorem',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
			},
			{
				id: '6',
				title: 'Lorem',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
			},
			{
				id: '7',
				title: 'Lorem',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
			},
			{
				id: '8',
				title: 'LOL',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
			}
		]
	};

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
