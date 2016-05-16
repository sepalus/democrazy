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
			<button className="nl-button" onClick={this.props.handleClick}> {this.props.text}
			</button>
			);
	}
}

module.exports = Button;
