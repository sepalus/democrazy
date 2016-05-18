import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Candidate from './Candidate';
import { addVote, voteAdded } from '../actions/vote';

require('./candidateList.scss');

class CandidateList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: ''
		};

		this.selecteItem = this.selecteItem.bind(this);
		this.unselecteItem = this.unselecteItem.bind(this);
		this.vote = this.vote.bind(this);
	}

	// componentDidMount() {
  //     var self=this;
  //     this.serverRequest = $.getJSON("http://localhost:3000/candidate", function(data) {
  // 			candidates = data;
  // 			self.setState({candidates:data});
	// 	});

    // addCandidate() {
    // 	var newguy = {name:"mike", pitch:"i'm new", url:"http://fitmenover40.com/wp-content/uploads/2014/03/Guy-drinking-beer.jpg"};
    //   candidates.push(newguy);
    // }

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

	renderItems() {
		let self = this;

		const	voted = _.filter(self.props.votes, function(vote) {
					return vote.token === ''
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

	render() {
		return (
			<div className="candidates-container" >
				{this.renderItems()}
			</div>
		)
	}
}

const mapStateToProps = (state)=> {
      return {
				candidates: state.candidates,
				votes: state.votes
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
