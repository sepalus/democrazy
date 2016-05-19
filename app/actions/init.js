import candidate from './candidate.js';
import { INIT_STATE } from '../constants';

export function initState(state, token) {
  return {
    type: INIT_STATE,
    state,
    token
  };
}
