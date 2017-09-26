// More than 4 needed, filter the one's out with less than 4

import React, { Component } from 'react'

class LanPortQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);

		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	// on change event 

	handleOptionChange(e) {
		this.props.props.setPage('RESULTS')
		this.props.props.addAnswer(e.target.value,"LAN_PORT_QUESTION")
		this.props.props.setAddProgress()
	}
	handleBack() {
		this.props.props.setRemoveProgress()
		this.props.props.setPage('DATA_TRANSFER_QUESTION')
		this.props.props.removeAnswer('LAN_PORT_QUESTION')
	}
// questions
	render () {

		return (
			<div className="my-container">
				<div>
					<h3 className='question-text'>How many LAN ports do you need?
					</h3>
					<h2 className="subquestion-text">A LAN (Local Area Network) port is the wired cable plugged internet devices. Think: TVs, game systems etc. <br/>Pro Tip: you'll always have faster speeds over a wire than wifi. Try plugging in devices whenever you can.
					</h2>

 						<div className='answer-row' >
							<button className="my-button" value="" onClick={this.handleOptionChange} >
								Less than 4
							</button>

							<button className="my-button" value=">4" onClick={this.handleOptionChange} >
								More than 4
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

export default LanPortQuestion
