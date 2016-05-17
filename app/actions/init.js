import candidate from './candidate.js';

export const INIT_STATE = 'INIT_STATE';

export function initState(state) {
  return {
    type: INIT_STATE,
    state
  };
}
