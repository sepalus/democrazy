import React from 'react';
import { Link } from 'react-router';
import Button from './Button';
import {connect} from 'react-redux';
import actions from '../actions/candidate';

class Header extends React.Component {
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

    return (<div className="row header">
      <div className="six columns">
        <a to="/">
          <img className="logo u-max-full-width " src="./images/EPS_RGB_WHITE_10.png" />
        </a>
      </div>
      <div className="six columns">
        <div className="nav">
            <Button
                text="Add candidate"
                type="nav-btn"
                icon="fa fa-search"
                handleClick = {this.handleClick}
            />
        </div>
      </div>
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
)(Header)
