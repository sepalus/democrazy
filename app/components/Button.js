import React from 'react';
var candidates;

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			candidates:false
		};
	}
	render() {
		return(
			<button className={this.props.type} onClick={this.props.handleClick}> {this.props.text}
			</button>
			);
	}	
}

module.exports = Button;
