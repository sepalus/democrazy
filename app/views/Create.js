import React from 'react';
import { Link } from 'react-router';
import Button from '../components/Button';
import {connect} from 'react-redux';
import actions from '../actions/candidate';

require('./create.scss');

class Create extends React.Component {

  constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick() {
    //var candidates;

    //this.props.dispatch(actions.addCandidate());

  }


  render() {

    return (
      <div>
          <div className="row results-container">
                <div className="column small-12 title-container">
                    <span className="heading">... </span>
                    <h2>Create a new vote</h2>
                </div>
          </div>
          <div className="row results-container">
              <form className="create-vote-form">
                <label>Question:</label><br/>
                <input type="text"/><br/>
                <label>Asker:</label><br/>
                <input type="text"/>
                <label>Candidates:</label><br/>
              </form>
          </div>
           

          
          <div className="row">
                <div className="column small-12 small-centered">
                  <div className="add-candidate-container">
                     <form className="add-candidate-form">
                      <div className="add-candidate-input-wrapper">
                        <input type="text" className="add-candidate-input" placeholder="Add name"/>
                       </div>
                       <div className="add-candidate-input-wrapper"> 
                          <input type="text"  className="add-candidate-input" placeholder="Add pitch"/>
                        </div>
                      </form>
                      <form className="add-candidate-form">
                      <div className="add-candidate-input-wrapper">
                        <input type="text" className="add-candidate-input" placeholder="Add name"/>
                       </div>
                       <div className="add-candidate-input-wrapper"> 
                          <input type="text"  className="add-candidate-input" placeholder="Add pitch"/>
                        </div>
                      </form>
                  </div>
                   
                </div>
             
            </div>


            <div className="row results-container">
              <div className="column small-12 small-centered align-center">
                  <Button text="Add candidate"/>
              </div>
              <div className="column small-12 small-centered align-center">
                  <Button text="Create vote"/>
              </div>
    
          </div>
          
          <div>
           
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
)(Create)
