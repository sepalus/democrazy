import React from 'react';

require('./bar.scss');

export default class Bar extends React.Component {

	render() {

    const { votes, title, max } = this.props;

		return(
        <span className="bar-container">
          <span className={"bar per-" + Math.round(votes*10/max)*10} data-votes={votes}>
            <span className="votes-count">{votes}</span>
          </span>
          <span className="bar-title">{title}</span>
        </span>
			);
	}
}
