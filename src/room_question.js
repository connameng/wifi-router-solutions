// filter out the routers without enough antennas for the larger places. 

import React, { Component } from 'react'


class RoomQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: ""
		};
	// binding function handle option change to instance it's being called on. Have to do.
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		let answer = e.target.value || "<4"

		this.props.props.setPage('NUM_DEVICES_QUESTION')
		this.props.props.addAnswer(answer,'ROOM_QUESTION')
		this.props.props.setAddProgress()
	}
	handleBack() {
		this.props.props.setRemoveProgress()
		this.props.props.setPage('PRICE_QUESTION')
		this.props.props.removeAnswer('ROOM_QUESTION')
	}

	render () {
		return (
			
			<div className="my-container">
				<div>
   					<h3 className='question-text'>How many bedrooms are there in your home or apartment?
					</h3>
					<h2 className="subquestion-text"> This will help determine the type of router and wirelss signal range needed. Note: the number of antennas does not necessarily mean longer range.
					</h2>

   							<div className="answer-row">

								<button className="my-button" value="<4" onClick={this.handleOptionChange}>
									<p className='my-p' value="<4">Studio - <br/> 2 Bedroom</p>
								</button>

								<button className="my-button" value=">4" onClick={this.handleOptionChange} >
									3+ Bedrooms 
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

export default RoomQuestion
