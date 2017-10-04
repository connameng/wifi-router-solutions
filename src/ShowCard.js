// const {string} = React.PropTypes
import React, { Component } from 'react'
  
class ShowCard extends Component {

 render () {
  const { iframe_url } = this.props
    return (
      <div className="my-iframe col-md-2">
          <iframe src={iframe_url}
          width="133px"
          height="200px"
          scrolling="no"
       />
      </div>
    )
  }
}

export default ShowCard