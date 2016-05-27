import React from 'react';
import {connect} from 'react-redux';
import CandidateList from './CandidateList';
import Button from './Button';

require('./form.scss');

class Form extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			candidates : [],
			valid: false,
			question: '',
			asker: ''
		};
		this.updateList = this.updateList.bind(this);
		this.checkValidity = this.checkValidity.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
		this.handleChangeAsker = this.handleChangeAsker.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.updateList(newProps.newCandidates);		
	}

  	updateList(newCandidates) {
  		this.setState({
			candidates : newCandidates
		})
		this.checkValidity(newCandidates);
  	}

  	handleChangeQuestion(e) {
    	this.setState({question: e.target.value});
  	}

  	handleChangeAsker(e) {
    	this.setState({asker: e.target.value});	
  	}

  	handleChange(id,valid) {
  		let self = this;
  	    let index = this.state.candidates.filter(function(candidate, index) {
        	if (candidate.id == id) {
        		let newCandidate = candidate;
        		newCandidate.valid = valid;

        		self.setState({
					candidates: self.state.candidates.slice(0, index).concat(newCandidate, self.state.candidates.slice(index+1))
				})
        	}
		});	
		this.checkValidity(this.state.candidates);
  	}

  	checkValidity(candidates) {
  		let isValid = true;
		candidates.forEach(function(candidate){
			if(candidate.valid == false) {
				isValid = false;
			}
		});
		this.state.valid = isValid;
  	}
  	
  	handleClick() {
  		console.log("Adding vote");
  	}

	render() {
		return(
	   		<form className="create-vote-form">
	            <label>Question:</label><br/>
	            <input type="text" value={this.state.question} onChange={this.handleChangeQuestion}/><br/>
	            <label>Asker:</label><br/>
	            <input type="text" value={this.state.asker} onChange={this.handleChangeAsker}/>
	           
	           	<div className="horizontal-line"></div>

	            <label>Candidates:</label><br/>
	            <CandidateList
	            	votingEnabled = {false}
					removeCandidate={this.props.removeCandidate}
					newCandidates = {this.props.newCandidates}		
					handleChange={this.handleChange}					

				/>
				<div className="create-vote-button-wrapper">
					<Button 
						text="Add candidate" 
						handleClick={this.props.addCandidate}
						icon="plus"
						type="add-candidate-button"
					/>
				</div>
				<div className="create-vote-button-wrapper">
		            <Button
						 handleClick = {this.handleClick}
						 isDisabled = {this.state.candidates == "" || !this.state.valid || !this.state.question || !this.state.asker}
						 text = "Create Vote"
					/>
				</div>
			</form>	          	
		);
	}
}
const mapStateToProps = (state)=> {
      return {
			newCandidates: state.candidate.newCandidates
      }
    },
    mapDispatchToProps = (dispatch)=> {
      return {
      }
    };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
