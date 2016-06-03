import React from 'react';
var candidates;

require('./button.scss');

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			candidates:false
		};
	}
	render() {
		return(
			<button 
				className={"nl-button " + (this.props.type ? this.props.type : "")}
				disabled={this.props.isDisabled}
				onClick={ this.props.handleClick }>
		 		{this.props.icon ? <i className={"fa fa-" + this.props.icon}></i> : '' }
				{this.props.text}
			</button>
			);
	}
}

module.exports = Button;
