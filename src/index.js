
import React from 'react';
import  {render} from 'react-dom';

import App from './App';
import '../public/assets/css/main.css'

const renderApp = () => {
	render(<App />, document.getElementById('root'));
}
renderApp()

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}