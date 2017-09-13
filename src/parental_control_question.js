// Filters out the routers which are not spceifified for parental controls if user selects they want to filter/restrict activiity on the internet.
// To Do: - add a section about open source firmware if they want to get any router, but be able to add parental controls.

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ParentalQuestion extends Component {
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
		this.props.handleParentalAnswer(e);
	}

// questions
	render () {
		console.log("Parental_question: ", this.props)
		return (
			<div className="my-container">
				<div>
					<h3 className='question-text'>Are you a parent or do you want the ability to filter and restrict activity on the internet?
					</h3>
					<h2 className="subquestion-text">Some routers specialize in parental controls which allow you to specify restrictions that limit the hours of a day certain devices can connect to the internet as well as restric certain websites. Very useful for parents! 
					</h2>
					<Link to="/FrequencyQuestion">
						<div className='answer-row' >
							<button className="my-button" value="TRUE" onClick={this.handleOptionChange}>
								Yes
							</button>

							<button className="my-button" value="" onClick={this.handleOptionChange} >
								No
							</button>
						</div>
					</Link>
					<Link to="/NumDevicesQuestion">
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

export default ParentalQuestion
