import React from 'react';
import {connect} from 'react-redux';

require('./newCandidate.scss');

class NewCandidate extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			pitch: '',
			valid: false
		};
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangePitch = this.handleChangePitch.bind(this);
		this.isValid = this.isValid.bind(this);
	}
	

	handleChangeName(e) {
    	this.setState({name: e.target.value}, function() {
    		this.isValid(function() {
	  			this.props.handleChange(this.props.id, this.state.valid, this.state.name, this.state.pitch);
	  		});
    	});	
  	}

	handleChangePitch(e) {
	  	this.setState({pitch: e.target.value}, function() {
	  		this.isValid(function() {
	  			this.props.handleChange(this.props.id, this.state.valid, this.state.name, this.state.pitch);
	  		});
	  	});
	}

	isValid(callback) {
		if (this.state.valid && (!this.state.name || !this.state.pitch)) {
			this.setState({valid:false},callback);
		} else if (!this.state.valid && (this.state.name && this.state.pitch))  {
			this.setState({valid:true}, callback);
		} else {
			this.props.handleChange(this.props.id, this.state.valid, this.state.name, this.state.pitch);
		}
	}

	render() {
		const data = this.props;
		return(
			<div className={"candidate"}>
				<button className="remove-candidate-button" onClick={this.props.removeCandidate}><i className="fa fa-close"></i></button>
	             	<div className="add-candidate-input-wrapper">
	                	<input type="text"  value={this.state.name} className="candidate-title add-candidate-input" onChange={this.handleChangeName} placeholder="Add name"/>
	                </div>
	                <div className="add-candidate-input-wrapper">
	                	<input type="text" value={this.state.pitch} className="candidate-text add-candidate-input" onChange={this.handleChangePitch}  placeholder="Add pitch"/>
	              	</div>
            </div>

		)
	}
}


NewCandidate.propTypes = {
    handleChange: React.PropTypes.func
 }

 const mapStateToProps = (state)=> {
      return {
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
)(NewCandidate)
