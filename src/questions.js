// aggregates all question components and pulls them in on the right hand side of the page. 

import React from 'react';
import RoomQuestion from './room_question';

import PriceQuestion from './price_question'
import ParentalQuestion from './parental_control_question'
import FrequencyQuestion from './frequency_band_question'
import DataTransferQuestion from './data_transfer_rate_question'
import LanPortQuestion from './lan_port_question' 
import NumDevicesQuestion from './numDevices_question'
import Results from './results'
import {ProgressBar} from 'react-bootstrap'
import { connect } from 'react-redux'
import {setCurrentPage, setAnswer, setAddProgress, setRemoveProgress, setResetProgress, removeAnswer} from './redux/actionCreators'


const Questions = (props) => (
  <div className='col-md-6 little-space'>

    {props.page === "PRICE_QUESTION" && 
      <PriceQuestion props={props} />
    }
    {props.page === "ROOM_QUESTION" && 
      <RoomQuestion props={props} />
    }
    {props.page === 'NUM_DEVICES_QUESTION' && 
      <NumDevicesQuestion props={props} />
    }
    {props.page === "PARENTAL_QUESTION" && 
      <ParentalQuestion props={props} />
    }
    {props.page === "FREQUENCY_QUESTION" && 
      <FrequencyQuestion props={props} />
    }
    {props.page === "DATA_TRANSFER_QUESTION" && 
      <DataTransferQuestion props={props} />
    }
    {props.page === "LAN_PORT_QUESTION" && 
      <LanPortQuestion props={props} />
    }
    {props.page === "RESULTS" && 
      <Results props={props} />
    }

    <ProgressBar now={props.progress} />
  </div>
);   

const mapDispatchToProps = (dispatch) => ({
  setPage(page) {
    dispatch(setCurrentPage(page))
  },
  addAnswer(answer,question) {
    dispatch(setAnswer(answer,question))
  },
  removeAnswer(question){
    dispatch(removeAnswer(question))
  },
  setAddProgress() {
    dispatch(setAddProgress())
  },
  setRemoveProgress(){
    dispatch(setRemoveProgress())
  },
  setResetProgress(){
    dispatch(setResetProgress())
  }
})


const mapStateToProps = state => ({page: state.page, progress:state.progress});

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
