import React from 'react';
import Vote from './Vote';

export default class App extends React.Component {
	render() {
	    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
      );
	 }
}
