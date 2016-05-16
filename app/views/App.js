var React = require('react');
import Header from '../components/Header';
import Vote from './Vote';

class App extends React.Component {
	render() {
	    return (
      <div>
        <Header/>
        <div className="container">
          {this.props.children}
        </div>	
      </div>
      );
	 }
}


module.exports = App;