import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Candidate from './Candidate';
import NewCandidate from './NewCandidate';
import { addVote, voteAdded } from '../actions/vote';
import { TOKEN } from '../constants';

require('./candidateList.scss');

class CandidateList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: '',
			candidates: [],
			valid: false
		};


		this.selecteItem = this.selecteItem.bind(this);
		this.unselecteItem = this.unselecteItem.bind(this);
		this.vote = this.vote.bind(this);
	}

	selecteItem(id) {
		this.setState({
			selected: id
		})
	}

	unselecteItem() {
		this.setState({
			selected: ''
		})
	}

	vote(vote) {
		this.props.dispatch( addVote(vote) );
	}

	renderItemsVote() {
		let self = this;

		const	token = localStorage ? localStorage.getItem(TOKEN): '',
					voted = _.filter(self.props.votes, function(vote) {
						return vote.token === token;
				})[0],
				hasVoted = !!voted;
		
		return _.map(this.props.candidates, function(candidate, index) {
			
			return <Candidate
						key={candidate.id}
						data={Object.assign(candidate, { votedFor: hasVoted && voted.candidate === candidate.id })}
						hasVoted={hasVoted}
						selected={ candidate.id === self.state.selected }
						handleSelect={ self.selecteItem }
						handleUnselect={ self.unselecteItem }
						handleVote={ self.vote }/>
		})
	}

	renderItemsCreate() {
		let self=this;

		return _.map(this.props.newCandidates, function(newCandidate, index) {
		
			return <NewCandidate
								key={newCandidate.id}
								data={Object.assign(newCandidate)}
								removeCandidate={() => self.props.removeCandidate(newCandidate)}
								id = {newCandidate.id}
								handleChange = {self.props.handleChange}
								/>
	
		}, this)
	}

	render() {

		return (
			<div className="candidates-container">
				{this.props.votingEnabled ? this.renderItemsVote() : this.renderItemsCreate()}
			</div>
		

		)
	}
}

const mapStateToProps = (state)=> {
      return {
				candidates: state.question.candidates,
				votes: state.question.votes,
      }
    },
    mapDispatchToProps = (dispatch)=> {
      return {
				dispatch
      }
    };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CandidateList)
