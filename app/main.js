import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './views/App';
import Create from './views/Create';
import Vote from './views/Vote';
import Results from './views/Results';
import reducer from './reducers/reducers';

require('./styles/main.scss');


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);


ReactDOM.render((
	  <Provider store={store}>
	    <Router history={hashHistory}>
		    <Route path="/" component={App}>
					<IndexRoute component={Results}/>
		      <Route path="create" component={Create}/>
		      <Route path="vote" component={Vote}/>
		      <Route path="results" component={Results}/>
		     </Route>
	    </Router>
	  </Provider>
	),

	document.getElementById('app')


	)
