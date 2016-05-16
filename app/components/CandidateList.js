import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Candidate from './Candidate';


var candidates;

class CandidateList extends React.Component{
	constructor() {
		super();
		this.state = {
			candidates:false
		};
		
	}
	
	componentDidMount() {
      var self=this;
      this.serverRequest = $.getJSON("http://localhost:3000/candidate", function(data) {
  			candidates = data;
  			self.setState({candidates:data});	
		});

     }

    addCandidate() {
    	var newguy = {name:"mike", pitch:"i'm new", url:"http://fitmenover40.com/wp-content/uploads/2014/03/Guy-drinking-beer.jpg"};
      candidates.push(newguy);
    }

	renderItems(isFirst) {
			return _.map(candidates, function(candidate, index) {
				return <Candidate key={index} name={candidate.name} pitch={candidate.pitch} url={candidate.url}/>
			})
	}

	render() {
		if (this.props.status == "voteAdded") {
			{this.addCandidate()}
		}
		return(
			<div className="container" >	
				{this.renderItems(true)}
			</div>
		)

	}
	
}


let styles = {
  candidate: {
  	border: 'solid 2px rgba(0,0,0,0.8)',
  	width: '28%',
  	float: 'left',
  	padding: '8px 9px 10px 9px',
  	margin: '5px 5px 5px 5px',
    backgroundColor: 'white',
    color: 'rgba(0,0,0,0.8)',
    position: 'relative'
  },
  voteButton: {
  	position:'absolute',
  	bottom: '0px',
  	right: '0px',
  }

};

const mapStateToProps = (state)=> {
      return {
 			status: state.candidate.status,
 			count: state.candidate.count
      }
    },
    mapDispatchToProps = (dispatch)=> {
      return {
      }
    };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CandidateList)
