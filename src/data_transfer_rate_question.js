// Filters out routers that are overly powerful or that are not powerful enough. 
// To do: - add section about how to find out which plan they are on. 

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DataTransferQuestion extends Component {
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
		this.props.handleDataTransferAnswer(e);
	}

// questions
	render () {
		console.log("DataTransfer_question: ", this.props)
		return (
			<div className="my-container">
				<div>
					<h3 className="question-text">How fast is the theoretical download speed on your internet service provider plan?
 					</h3>
 					<h2 className="subquestion-text">This is whatever internet speed you are paying for to the internet service provider. Mbps = Megabits per second.  
					</h2>
 						<Link to="/LanPortQuestion">

	 						<div className='answer-row'>
								<button className="my-button" value="1" onClick={this.handleOptionChange}>
									Less than <br/> 100 Mbps
								</button>

								<button className="my-button" value="2"  onClick={this.handleOptionChange} >
									More than <br/> 100 Mbps 
								</button>
							</div>

						</Link>
						<Link to="/FrequencyQuestion">
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

export default DataTransferQuestion
