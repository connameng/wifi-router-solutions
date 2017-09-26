// If they have over 8 devices, put MIMO filter = true 

import React, { Component } from 'react'

class NumDevicesQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: ""
		};

		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.props.props.setPage('PARENTAL_QUESTION')
		this.props.props.addAnswer(e.target.value,"NUM_DEVICES_QUESTION")
		this.props.props.setAddProgress()
	}
	handleBack() {
		this.props.props.setRemoveProgress()
		this.props.props.setPage('ROOM_QUESTION')
		this.props.props.removeAnswer('NUM_DEVICES_QUESTION')
	}
// questions
	render () {

		return (
			<div className="my-container">
				<div>
					<h3 className='question-text'>How many devices will be connected to the wireless internet?
					</h3>
					<h2 className="subquestion-text">Think of how many devices (laptops, gaming systems, cell phones/ TVs etc.) that will be connected to your wireless network. Informative: There's a great technology called MIMO that helps with multiple devices on the same network.
					</h2>

 						<div className='answer-row' >
							<button className="my-button" value="" onClick={this.handleOptionChange}>
								Less than 8
							</button>
							<button className="my-button" value="TRUE" onClick={this.handleOptionChange} >
								More than 8
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

export default NumDevicesQuestion
