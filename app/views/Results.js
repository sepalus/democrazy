var React = require('react');
import Button from '../components/Button';
import {connect} from 'react-redux';

class Results extends React.Component {
	render() {
		return (<div>
							<div className="row voting-container">
								<div className="column small-12 title-container">
									<span className="heading">Vote</span>
									<h2>{ this.props.question }</h2>
								</div>
							</div>
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
const mapStateToProps = (state)=> {
      return {
				question: state.text,
 				candidates: state.candidates,
				votes: []
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
)(Results);
