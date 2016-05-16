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

    return (
      <header>
        <div className="row">
          <div className="column small-6">
            <a to="/">
              <img className="logo u-max-full-width " src="./assets/EPS_RGB_WHITE_10.png" />
            </a>
          </div>
          <div className="column small-6">
            <div className="nav">
                <Button
                    text="Add candidate"
                    className="button"
                    type="nav-btn"
                    icon="fa fa-search"
                    handleClick = {this.handleClick}
                />
            </div>
          </div>
        </div>
    </header>);
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
