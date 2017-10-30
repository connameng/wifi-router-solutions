
import React, { Component } from 'react'

class FrequencyQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.props.props.setPage('DATA_TRANSFER_QUESTION')
		this.props.props.addAnswer(e.target.value,"FREQUENCY_QUESTION")
		this.props.props.setAddProgress()
	}
	handleBack() {
		this.props.props.setRemoveProgress()
		this.props.props.setPage('PARENTAL_QUESTION')
		this.props.props.removeAnswer('FREQUENCY_QUESTION')
	}
// questions
	render () {

		return (

			<div className="my-container">
				<div>
					<h3 className='question-text'>Do you live in an apartment complex/ city where there are many current wifi networks?
					</h3>
					<h2 className="subquestion-text"> This will help determine which frequency router you need 2.4GHz vs 5GHz. 
					</h2>

 						<div className="answer-row">
							<button className='my-button' value="TRUE" onClick={this.handleOptionChange}>
								Yes
							</button>
							<button className='my-button' value="" onClick={this.handleOptionChange} >
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

export default FrequencyQuestion
