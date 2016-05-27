import { combineReducers } from 'redux';
import question from './question';
import candidate from './candidate';

export default combineReducers({
  	question,
  	candidate
});
