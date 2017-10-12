// const {string} = React.PropTypes
import React, { Component } from 'react'
  
class ShowCard extends Component {

 render () {
  const { router_url, photo, price } = this.props
  const pricture = `../public/assets/images/${photo}`
  console.log(price, photo)
    return (
      <a className="my-iframe col-md-2" href={router_url}>
        <img src={require("../public/assets/images/google_wifi_router.jpg")} width="133px" height="200px" scrolling="no" alt='picture'/>
        About ${price}
      </a>
    )
  }
}

export default ShowCard