import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import reducer from './reducers/rootReducer'

//  const store = createStore(reducer)

ReactDOM.render(
  // <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
 
  document.getElementById('root')
);

/* </Provider>, */