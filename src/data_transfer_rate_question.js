// Filters out routers that are overly powerful or that are not powerful enough. 
// To do: - add section about how to find out which plan they are on. 

import React, { Component } from 'react'

class DataTransferQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);


		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.props.props.setPage('LAN_PORT_QUESTION')
		this.props.props.addAnswer(e.target.value,"DATA_TRANSFER_QUESTION")
		this.props.props.setAddProgress()
	}
	handleBack() {
		this.props.props.setRemoveProgress()
		this.props.props.setPage('ROOM_QUESTION')
		this.props.props.removeAnswer('DATA_TRANSFER_QUESTION')
	}
// questions
	render () {
		return (
			<div className="my-container">
				<div>
					<h3 className="question-text">How fast is the theoretical download speed on your internet service provider plan?
 					</h3>
 					<h2 className="subquestion-text">This is whatever internet speed you are paying for to the internet service provider. Mbps = Megabits per second.  
					</h2>

	 						<div className='answer-row'>
								<button className="my-button" value="1" onClick={this.handleOptionChange}>
									Less than <br/> 100 Mbps
								</button>

								<button className="my-button" value="2"  onClick={this.handleOptionChange} >
									More than <br/> 100 Mbps 
								</button>
							</div>


							<div className='answer-row' >
								<button className="my-button my-big" onClick={this.handleBack} >
									Back  
								</button>
							</div>
					</div>
			</div>
			)
		}
	}

export default DataTransferQuestion
