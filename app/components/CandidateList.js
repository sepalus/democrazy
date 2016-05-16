import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Candidate from './Candidate';

require('./candidateList.scss');

class CandidateList extends React.Component {

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

	renderItems() {
		return _.map(this.props.candidates, function(candidate, index) {
			return <Candidate key={candidate.id} data={candidate} chosen={ index ===  1}/>
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
)(CandidateList)
