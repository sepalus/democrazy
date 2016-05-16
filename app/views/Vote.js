var React = require('react');
import {connect} from 'react-redux';
import CandidateList from '../components/CandidateList';
import actions from '../actions/candidate';

class Vote extends React.Component {
	render() {
		return (
					<div>
				      <div className="row">
								<div className="column small-12">
				          <h1>Place your bets!</h1>
								</div>
				      </div>
				      <div className="row">
								<div className="column small-12">
				        	<CandidateList/>
								</div>
				      </div>
    			</div>
				);
	}
};

const mapStateToProps = (state)=> {
      return {
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
