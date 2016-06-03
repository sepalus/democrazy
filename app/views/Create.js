import React from 'react';
import { Link } from 'react-router';
import Form from '../components/Form';
//import { newCandidate, removeCandidate} from '../actions/candidate';
//import {addQuestion } from '../actions/question';

import {connect} from 'react-redux';

class Create extends React.Component {

 render() {
    return (
      <div>
        <div className="row title-row results-container">
              <div className="column small-12 title-container">
                  <span className="heading">Create</span>
                  <h2>Create a new vote</h2>
              </div>
        </div>
        <div className="row">       
          <div className="column small-12 small-centered">
             <Form />
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
