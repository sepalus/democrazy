import React from 'react';
import { Link } from 'react-router';
import Button from '../components/Button';
import {connect} from 'react-redux';
import actions from '../actions/candidate';

class Create extends React.Component {

  constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var candidates;

    this.serverRequest = $.getJSON("http://localhost:3000/candidate",function(json) {
        candidates = json;
        var newguy = {name:"mike"};
        candidates.push(newguy);
    });
    this.props.dispatch(actions.addCandidate());

  }


  render() {

    return (
      <div className="question">
			  <span class="question-title">Question</span>:
			  <input type="text" name="question" placeholder="Who is the next American president?"/><br/>
			  Asker:<br/>
			  <input type="text" name="asker" placeholder="Who wants to know?"/><br/>

            <Button
                text="Addz candidates"
                type="nav-btn"
                icon="fa fa-search"
                handleClick = {this.handleClick}
            />
    </div>);
  }

}

export default connect(
    (state)=> {
      return {
      }
    },
    (dispatch)=> {
        return {
            dispatch
        }
    }
)(Create)
