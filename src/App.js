
import React, { Component } from 'react'
import Questions from './questions'
import ShareWidget from './share_widget'


class App extends Component {
  render() {
    return (
      <div> 
        <ShareWidget />
        <Questions /> 
       </div>
    );
  }
}

export default App
