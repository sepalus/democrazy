var React = require('react');
import {connect} from 'react-redux';
import CandidateList from '../components/CandidateList';
import actions from '../actions/candidate';

class Vote extends React.Component {
	constructor() {
	    super();
	  }

	render() {
		return (<div>
				      <div className="row first-component centralize">
				          <h1>Place your bets!</h1>
				      </div>
				      <div className="container">
				        <CandidateList/>
				      </div>
        
    			</div>);
	}
};

const mapStateToProps = (state)=> {
      return {
 			status: state.candidate.status

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