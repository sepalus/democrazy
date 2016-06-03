import { ADD_QUESTION, QUESTION_ADDED } from '../constants';

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function questionAdded(question) {
  return {
    type: QUESTION_ADDED,
    question
  }
}
