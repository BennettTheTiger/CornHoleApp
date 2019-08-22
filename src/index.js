import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import HowToPage from './routes/HowTo/Howto'
import SettingsContainer from './routes/Settings/SettingsContainer'
import Varients from './routes/Varients';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './styles/type.scss';
import './styles/nav.scss';
import {hideNav} from './utils/navMover';
import reducer from './redux/reducer/rootReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(<Provider store={store}>
  <Router>
      <div>
        <div className="nav">
          <button id="navClose" onClick={() => hideNav()}>X</button>
          <ul>
            <li>
              <Link to="/" className="menu-link">Game</Link>
            </li>
            <li>
              <Link to="/howto" className="menu-link">How To Play</Link>
            </li>
            <li>
              <Link to="/playStyles" className="menu-link">Play Styles</Link>
            </li>
            <li>
              <Link to="/settings" className="menu-link">Settings</Link>
            </li>
          </ul>
        </div>

        <Route exact path="/" component={App} />
        <Route path="/howto" component={HowToPage} />
        <Route path="/settings" component={SettingsContainer} />
        <Route path="/playStyles" component={Varients} />
      </div>
    </Router>  
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
