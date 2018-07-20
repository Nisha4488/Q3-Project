import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </Provider>, document.getElementById('root'));
