// Filters out the routers which are not spceifified for parental controls if user selects they want to filter/restrict activiity on the internet.

import React, { Component } from 'react'

class ParentalQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);


		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	// on change event 

	handleOptionChange(e) {
		this.props.props.setPage('FREQUENCY_QUESTION')
		this.props.props.addAnswer(e.target.value,"PARENTAL_QUESTION")
		this.props.props.setAddProgress()
	}
	handleBack() {
		this.props.props.setRemoveProgress()
		this.props.props.setPage('NUM_DEVICES_QUESTION')
		this.props.props.removeAnswer('PARENTAL_QUESTION')
	}
// questions
	render () {
		return (
			<div className="my-container">
				<div>
					<h3 className='question-text'>Are you a parent or do you want the ability to filter and restrict activity on the internet?
					</h3>
					<h2 className="subquestion-text">Some routers specialize in parental controls which allow you to specify restrictions that limit the hours of a day certain devices can connect to the internet as well as restric certain websites. Very useful for parents! 
					</h2>

						<div className='answer-row' >
							<button className="my-button" value="TRUE" onClick={this.handleOptionChange}>
								Yes
							</button>

							<button className="my-button" value="" onClick={this.handleOptionChange} >
								No
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

export default ParentalQuestion
