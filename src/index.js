import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import HowToPage from './routes/HowTo/Howto'
import SettingsContainer from './routes/Settings/SettingsContainer'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './redux/reducer/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(<Provider store={store}>
  <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Game</Link>
          </li>
          <li>
            <Link to="/howto">How To Play</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={App} />
        <Route path="/howto" component={HowToPage} />
        <Route path="/settings" component={SettingsContainer} />
      </div>
    </Router>  
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
