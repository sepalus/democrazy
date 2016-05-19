import { voteAdded } from '../actions/vote';
import { initState } from '../actions/init';
import io from 'socket.io-client';

import { INIT_STATE, INIT_STATE_SUCCESS, INIT_STATE_REQUEST, TOKEN, ADD_VOTE, VOTE_ADDED } from '../constants';

let socket;

export function start(store) {
  socket = io.connect('/');

  socket.emit(INIT_STATE_REQUEST, localStorage ? localStorage.getItem(TOKEN): '' )

  socket.on(INIT_STATE_SUCCESS, data => {
    store.dispatch(initState(data._state, data._token))
  });

  socket.on(VOTE_ADDED, vote => {
    store.dispatch(voteAdded(vote));
  });

}

export function socketMiddleware(store) {
  return next => action => {

   const result = next(action);

   if (socket && action.type === ADD_VOTE) {
     socket.emit(ADD_VOTE, action.vote);
   }

   return result;
 };
}
