import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './views/App';
import Create from './views/Create';
import Vote from './views/Vote';
import Results from './views/Results';
import question from './reducers/question';
import {socketMiddleware} from './middleware/socket';

require('./styles/main.scss');


const createStoreWithMiddleware = applyMiddleware(thunk,socketMiddleware)(createStore);
const store = createStoreWithMiddleware(question);


ReactDOM.render((
	  <Provider store={store}>
	    <Router history={browserHistory}>
		    <Route path="/" component={App}>
					<IndexRoute component={Vote}/>
		      <Route path="create" component={Create}/>
		      <Route path="vote" component={Vote}/>
		      <Route path="results" component={Results}/>
		     </Route>
	    </Router>
	  </Provider>
	),

	document.getElementById('app')


	)
