// 	filters out routers that are not in range 
// To Do: 

import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class PriceQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props,context) {
		super(props,context);
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
		this.props.handlePriceAnswer(e);
	}


	render () {
		return (

			<div className="my-container">
				<div>
   					<h3 className='question-text'>How much would you like to spend? 
					</h3>
					<h2 className="subquestion-text">I know... first question about money. It's important to think about your maximum budget before looking at different features. <br/>Note: if you do not see any routers, please turn off your add blocker. Also, you might need to pay more if you require more features.
					</h2>
   					<Link to="/RoomQuestion">
   						<div className='answer-row'>

							<button className="my-button" value="<100" onClick={this.handleOptionChange}>
								Less than <b>$100</b>
							</button>

							<button className="my-button"  value="<150" onClick={this.handleOptionChange}>
								Less than <b>$150</b>
							</button>

						</div>
						<div className='answer-row'>

							<button className="my-button" value="<200" onClick={this.handleOptionChange}>
								Less than <b>$200</b>
							</button>

							<button className="my-button"  value="anyprice" onClick={this.handleOptionChange}>
								<p className='my-p'>Just get me the <br/>best! </p>
							</button>

						</div>
					</Link>
				</div>	
			</div>
			)
		}
	}

export default PriceQuestion



