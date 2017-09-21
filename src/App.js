
import React, { Component } from 'react'
import Questions from './questions'
import {
  HashRouter,
  Route,
  history
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      	<HashRouter>
        	<Questions />
        </HashRouter>
    );
  }
}

export default App
