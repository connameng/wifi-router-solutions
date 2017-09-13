// If they have over 8 devices, put MIMO filter = true 
// To do: none
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NumDevicesQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: "5"
		};

		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.setState({
			answer: e.target.value
		});
		this.props.handleNumDevicesAnswer(e);
	}

// questions
	render () {
		console.log("NumDevices_question: ", this.props)
		return (
			<div className="my-container">
				<div>
					<h3 className='question-text'>How many devices will be connected to the wireless internet?
					</h3>
					<h2 className="subquestion-text">Think of how many devices (laptops, gaming systems, cell phones/ TVs etc.) that will be connected to your wireless network. Informative: There's a great technology called MIMO that helps with multiple devices on the same network.
					</h2>
					<Link to="/ParentalQuestion">
 						<div className='answer-row' >
							<button className="my-button" value="" onClick={this.handleOptionChange}>
								Less than 8
							</button>
							<button className="my-button" value="TRUE" onClick={this.handleOptionChange} >
								More than 8
							</button>
						</div>
					</Link>
						<Link to="/RoomQuestion">
							<div className='answer-row' >
								<button className="my-button my-big" onClick={this.props.removeProgress} >
									Back  
								</button>
							</div>
						</Link>
				</div>	
			</div>
			)
		}
	}

export default NumDevicesQuestion
