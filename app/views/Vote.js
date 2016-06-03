var React = require('react');
import {connect} from 'react-redux';
import CandidateList from '../components/CandidateList';
import actions from '../actions/candidate';

require('./vote.scss');

class Vote extends React.Component {
	render() {
		return (
					<div>
				      <div className="row title-row voting-container">
						<div className="column small-12 title-container">
				          <span className="heading">Vote</span>
						  <h2 className="title-question">{ this.props.question }</h2>
						  <h3 className="title-asker"> - { this.props.asker }</h3>
						</div>
				      </div>
				      <div className="row">
						<div className="column small-12 small-centered">
				        	<CandidateList
				        		votingEnabled={true}
				        		newVote = {true}

				        	/>
						</div>
				      </div>
    			</div>
				);
	}
};

const mapStateToProps = (state)=> {
      return {
			question: state.question.question,
			asker: state.question.asker,
			candidates: state.question.candidates
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
)(Vote)
