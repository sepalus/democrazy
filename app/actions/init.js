import candidate from './candidate.js';

export const INIT_STATE = 'INIT_STATE';
export const INIT_STATE_SUCCESS = 'INIT_STATE_SUCCESS';

export function initState(state) {
  return {
    type: INIT_STATE,
    state
  };
}

export function initStateSuccess(state) {
  return {
    type: INIT_STATE,
    state
  }
}
