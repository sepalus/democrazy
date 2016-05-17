export const ADD_VOTE = 'ADD_VOTE';
export const VOTE_ADDED = 'VOTE_ADDED';

export function addVote(vote) {
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
