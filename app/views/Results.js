var React = require('react');
import Bar from '../components/Bar';
import {connect} from 'react-redux';

require('./results.scss');

class Results extends React.Component {

	renderVotes() {
		const length = this.props.votes.length,
		self = this;

		let votes = {};
		for(let i = 0; i < length; i++) {
			let vote = self.props.votes[i].candidate.toString();
			if(votes.hasOwnProperty(vote)) votes[vote] += 1;
			else votes[vote] = 1;
		}

		const max = _.max(_.values(votes));

		return _.map(this.props.candidates, function(candidate, index) {
			return (
				<Bar key={index} votes={votes[candidate.id] || 0} max={max} title={candidate.title}/>
			);
		})
	}

	render() {
		return (<div>
					<div className="row title-row results-container">
						<div className="column small-12 title-container">
							<span className="heading">Results</span>
							<h2 className="title-question">{ this.props.question }</h2>
							<h3 className="title-asker"> - { this.props.asker }</h3>
						</div>
					</div>
				      <div className="row">
								<div className="column small-12 small-centered">
									<div className="bars-container">
										{ this.renderVotes() }
									</div>
								</div>
				      </div>
    		</div>);
	}
};

const mapStateToProps = (state)=> {
      return {
				question: state.question.question,
				asker: state.question.asker,
 				candidates: state.question.candidates,
				votes: state.question.votes
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
)(Results);
