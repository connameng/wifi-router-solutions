// finished the survey congrats page 

import React, { Component } from 'react'
import party from "../public/images/party.png"

class Results extends Component {
		constructor(props) {
		super(props);

		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	handleOptionChange(e) {
		this.props.props.setResetProgress()
	}
  render() {
    return (
			<div className="my-container">
				<div> 
					
					<h3 className='question-text'><img className="my-img" src={party} alt="Party"/> Congrats! Suckka <img  className="my-img"src={party} alt="party" /> <br/>Here are your reccomended routers 
					
					</h3>
					<h2 className="subquestion-text"> 
						<ol>
							<li>If you still have a handful to choose from, consider the router warranty period and support offerings. Link to Customer Support table to show differences. </li>
							<li>If you do not see any routers, you will need a higher price point for the features you need.  					
								</li> 
						</ol>
					</h2>

							<div className='answer-row' >
								<button className="button small" onClick={this.handleOptionChange} >
									One more time  
								</button>
							</div>

					</div>
			</div>
    );
  }
}

export default Results
