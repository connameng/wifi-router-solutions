// filter out the routers without enough antennas for the larger places. 
// To Do: 

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RoomQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: "5"
		};
	// binding function handle option change to instance it's being called on. Have to do.
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.setState({
			answer: e.target.value
		});
		this.props.handleRoomAnswer(e);
	}

	render () {
		return (
			
			<div className="my-container">
				<div>
   					<h3 className='question-text'>How many bedrooms are there in your home or apartment?
					</h3>
					<h2 className="subquestion-text"> This will help determine the type of router and wirelss signal range needed. Note: the number of antennas does not necessarily mean longer range.
					</h2>
   						<Link to="/NumDevicesQuestion">
   							<div className="answer-row">

								<button className="my-button" value="<4" onClick={this.handleOptionChange}>
									<p className='my-p'>Studio - <br/> 2 Bedroom</p>
								</button>

								<button className="my-button" value=">4" onClick={this.handleOptionChange} >
									3+ Bedrooms 
								</button>
							</div>
						</Link>

						<Link to="/">
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

export default RoomQuestion
