var React = require('react');
import {connect} from 'react-redux';
import CandidateList from '../components/CandidateList';
import actions from '../actions/candidate';

require('./vote.scss');

class Vote extends React.Component {
	render() {
		return (
					<div>
				      <div className="row voting-container">
								<div className="column small-12 title-container">
				          <span className="heading">Vote</span>
									<h2>{ this.props.question }</h2>
								</div>
				      </div>
				      <div className="row">
								<div className="column small-12 small-centered">
				        	<CandidateList/>
								</div>
				      </div>
    			</div>
				);
	}
};

const mapStateToProps = (state)=> {
      return {
				question: state.text,
 				candidates: state.candidates
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
