import React, { Component } from 'react'
import ShowCard from './ShowCard'

class RouterFilter extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);

	}

	render () {
		let props = this.props.props
		console.log(props.routers)
		return (
			
			<div className="my-container">
				{props.routers.routers
					.filter(router => {
						if(props.PRICE_QUESTION === "<100"){
							if(router['price ($)'] <= 100) {
								return router 
							}
						}
						else if(props.PRICE_QUESTION === "<150"){
							if(router['price ($)'] < 150) {
								return router 
							}
						} else if(props.PRICE_QUESTION === "<200"){
							if(router['price ($)'] < 200) {
								return router 
							}
						} else {
							return router 
						}
					})
					.filter(router => {
						if(props.ROOM_QUESTION === "<4"){
							if(router['antennas'] <= 4) {
								return router 
							}
						}
						if(props.ROOM_QUESTION === ">4"){
							if(router['antennas'] > 4 || router.mesh_network === "TRUE") {
								return router 
							}
						} else {
							return router 
						}
					})
					.filter(router => router['MU-MIMO (number of devices)'].indexOf(props.NUM_DEVICES_QUESTION) >= 0)
					.filter(router => router['parent_control_specialty'].indexOf(props.PARENTAL_QUESTION) >= 0)
					.filter(router => router['5ghz frequency'].indexOf(props.FREQUENCY_QUESTION) >= 0)
					.filter(router => router['data_transfer_value (1=<1300; 2>1300 mbps)'].indexOf(props.DATA_TRANSFER_QUESTION) >= 0)
					.filter(router => {
						if(props.LAN_PORT_QUESTION === ">4"){
							if(router['LAN_ports'] >= 4) {
								return router
							}
						} else {
							return router
						}
					})
					.map( router => <ShowCard key={router.ASIN} {...router}/>)
				}
			</div>
			)
		}
	}

export default RouterFilter
