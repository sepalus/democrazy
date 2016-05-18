import { voteAdded, ADD_VOTE, VOTE_ADDED } from '../actions/vote';
import { INIT_STATE, INIT_STATE_SUCCESS, initState } from '../actions/init';
import io from 'socket.io-client';

let socket;

export function start(store) {
  socket = io.connect('/');

  socket.on(INIT_STATE_SUCCESS, state => {
    console.log(INIT_STATE_SUCCESS, state);
    store.dispatch(initState(state))
  });

  socket.on(VOTE_ADDED, message => {
    store.dispatch(voteAdded(message));
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
