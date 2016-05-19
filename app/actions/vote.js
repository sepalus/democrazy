import { ADD_VOTE, VOTE_ADDED, TOKEN } from '../constants';

export function addVote(vote) {
  vote['token'] = localStorage ? localStorage.getItem(TOKEN) : '';
  return {
    type: ADD_VOTE,
    vote
  }
}

export function voteAdded(vote) {
  return {
    type: VOTE_ADDED,
    vote
  }
}
