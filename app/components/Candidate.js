import React from 'react';
import _ from 'lodash';
import Button from './Button';

require('./candidate.scss');

export default class Candidate extends React.Component{

	render() {
		const { data, chosen, handleSelect, handleUnselect, handleVote, selected, hasVoted } = this.props;

		return(
			<div className={"candidate " + (selected ? 'selected': '')}
						onClick={ ()=> { if(!selected) handleSelect(data.id); } }
						disabled={selected}>
				<span className="status"><i className="fa fa-check"></i>voted</span>
				<span className="candidate-title">{data.title}</span>
				<span className="candidate-text">{data.text}</span>
				{ !hasVoted ?
				<div className="candidate-buttons-container">
					<span className="candidate-button vote">
						<Button text="cancel" icon="close" handleClick={handleUnselect} type="red"/>
					</span>
					<span className="candidate-button cancel">
						<Button text="vote" icon="check" handleClick={ ()=> handleVote(data) } type="green"/>
					</span>
				</div>
				: null }
				{ data.votedFor ? <span className="voted-for"><i className="fa fa-check"></i>voted</span> : null }
			</div>

		)
	}
}
