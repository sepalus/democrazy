import React from 'react';
import _ from 'lodash';

require('./candidate.scss');


export default class Candidate extends React.Component{
	constructor() {
		super();
	}

	render() {
		const { data, chosen, handleClick } = this.props;
		return(
			<div className={"candidate " + (chosen ? 'chosen': '')} onClick={handleClick}>
				<span className="candidate-title">{data.title}</span>
				<span className="canddidate-text">{data.text}</span>
			</div>

		)
	}
}
