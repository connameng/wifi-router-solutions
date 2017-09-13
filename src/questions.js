// aggregates all question components and pulls them in on the right hand side of the page. 

import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  history
} from 'react-router-dom'
import RoomQuestion from './room_question';
import Routers from './routers';
import PriceQuestion from './price_question'
import ParentalQuestion from './parental_control_question'
import FrequencyQuestion from './frequency_band_question'
import DataTransferQuestion from './data_transfer_rate_question'
import LanPortQuestion from './lan_port_question' 
import NumDevicesQuestion from './numDevices_question'
import Results from './results'
import {ProgressBar} from 'react-bootstrap'
 
class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
      progressBar: 1
    }
    this.handlePriceAnswer = this.handlePriceAnswer.bind(this)
    this.handleRoomAnswer = this.handleRoomAnswer.bind(this)
    this.handleParentalAnswer = this.handleParentalAnswer.bind(this)
    this.handleFrequencyAnswer = this.handleFrequencyAnswer.bind(this)
    this.handleDataTransferAnswer = this.handleDataTransferAnswer.bind(this)
    this.handleLanPortAnswer = this.handleLanPortAnswer.bind(this)
    this.handleNumDevicesAnswer = this.handleNumDevicesAnswer.bind(this)
    this.addProgress = this.addProgress.bind(this)
    this.removeProgress = this.removeProgress.bind(this)
    this.resetProgress = this.resetProgress.bind(this)
  }

  addProgress(){
    let newProgressBar = this.state.progressBar
    newProgressBar += 100/7
    this.setState({progressBar:newProgressBar})
  }

  removeProgress(){
    let newProgressBar = this.state.progressBar
    newProgressBar -= 100/7
    this.setState({progressBar:newProgressBar})
  }

  resetProgress(){
    let newProgressBar = this.state.progressBar
    newProgressBar = 1
    this.setState({progressBar:newProgressBar})
  }

  handlePriceAnswer(val) {
    // prevents page from reloading 
    // e.preventDefault()
    const items = this.state.allAnswers;
    items[0] = val.target.value;
    this.setState({
      items,
    })
    this.addProgress()

  }
  handleRoomAnswer(val) {
    // e.preventDefault()
    const items = this.state.allAnswers;
    items[1] = val.target.value;
    this.setState({
      items,
    })
    this.addProgress()
  }
  handleParentalAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[2] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }
  handleFrequencyAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[3] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }
  handleDataTransferAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[4] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }
  handleLanPortAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[5] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }
 handleNumDevicesAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[6] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }

  render() {
    return (
      <div >
        <div className='col-md-6 little-space'>
          <BrowserRouter>
            <div>
              <Route exact path="/" render={()=><PriceQuestion context={history} removeProgress={this.removeProgress} handlePriceAnswer={this.handlePriceAnswer}/>}/>
              <Route exact path="/RoomQuestion" render={()=><RoomQuestion removeProgress={this.removeProgress} handleRoomAnswer={this.handleRoomAnswer}/>}/>
              <Route exact path="/NumDevicesQuestion" render={()=><NumDevicesQuestion removeProgress={this.removeProgress} handleNumDevicesAnswer={this.handleNumDevicesAnswer}/>}/>
              <Route exact path="/ParentalQuestion" render={()=><ParentalQuestion removeProgress={this.removeProgress} handleParentalAnswer={this.handleParentalAnswer}/>}/>
              <Route exact path="/FrequencyQuestion" render={()=><FrequencyQuestion removeProgress={this.removeProgress} handleFrequencyAnswer={this.handleFrequencyAnswer}/>}/>
              <Route exact path="/DataTransferQuestion" render={()=><DataTransferQuestion removeProgress={this.removeProgress} handleDataTransferAnswer={this.handleDataTransferAnswer}/>}/>
              <Route exact path="/LanPortQuestion" render={()=><LanPortQuestion removeProgress={this.removeProgress} handleLanPortAnswer={this.handleLanPortAnswer}/>}/>
              <Route exact path="/Results" render={()=><Results resetProgress={this.resetProgress} handleResultsPage={this.handleResultsPage}/>}/>
            </div>
          </BrowserRouter>
          <ProgressBar now={this.state.progressBar} />
        </div>

        <div className='col-md-6 little-space'>
          <Routers userAnswers={this.state.allAnswers} />
       </div>
      </div>
    );   
  }
}

export default Questions;
