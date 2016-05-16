import React from 'react';
import _ from 'lodash';


class Candidate extends React.Component{
	constructor() {
		super();
	}

	render() {
		return(
			<div className="row" style={styles.candidate} >
				<h4>{this.props.name}</h4>
				<p>{this.props.pitch}</p>
				<img src={this.props.url} width="100px">
				</img>
				<button style={styles.voteButton}>Vote
				</button>
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

module.exports = Candidate	;
