import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react'
import todo from './store/todoStore'


ReactDOM.render(
  <Provider todo={todo}><App /></Provider>,
  document.getElementById('root')
);

