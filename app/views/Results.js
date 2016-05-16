var React = require('react');
import Button from '../components/Button';

class Results extends React.Component {
	render() {
		return (<div>
				      <div className="row">
								<div className="column small-12 small-centered">
									<h1>We demand RESULTS!!</h1>
									<Button
										text="Click"
										className="button"
										type="nav-btn"
										icon="fa fa-search"
										handleClick = {()=> { console.log('click')}}
									/>
								</div>
				      </div>
    		</div>);
	}
};

module.exports = Results;
