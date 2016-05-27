import React from 'react';
import { Link } from 'react-router';
import Form from '../components/Form';
import { newCandidate, removeCandidate } from '../actions/candidate';
import {connect} from 'react-redux';

var count =0; //replace this
class Create extends React.Component {

  constructor() {
    super();
    this.addCandidate = this.addCandidate.bind(this);
    this.removeCandidate = this.removeCandidate.bind(this);
  }

  addCandidate() {
    count ++; //replace this
    let candidate= {id:count, valid:false};
    this.props.dispatch(newCandidate(candidate) );
  }

  removeCandidate(candidate) {
    this.props.dispatch(removeCandidate(candidate) );
  }


  render() {
    return (
      <div>
        <div className="row results-container">
              <div className="column small-12 title-container">
                  <span className="heading">Create</span>
                  <h2>Create a new vote</h2>
              </div>
        </div>
        <div className="row">       
          <div className="column small-12 small-centered">
             <Form 
                removeCandidate={this.removeCandidate}
                addCandidate={this.addCandidate}

              />
          </div>    
        </div>          
    </div>);
  }

}

const mapStateToProps = (state)=> {
      return {
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
)(Create)
