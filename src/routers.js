// filters the routers       

import React from 'react'
import { connect } from 'react-redux'
import RouterFilter from './router_filter'
import ShareWidget from './share_widget'

const Routers = (props) => (
   <div className='col-md-6 little-space'> 
      <ShareWidget />
      <div >
        <h3 className='question-text'> Router Options </h3>
      </div>

      <RouterFilter props={props} />
  </div>
  )

    // var priceAnswer = this.props.userAnswers[0]
    // if(!priceAnswer || priceAnswer === "anyprice" || priceAnswer === "clearprice") {
    //   priceAnswer = ""
    // }
    // var antennaAnswer = this.props.userAnswers[1]
    // if(!antennaAnswer) {
    //   antennaAnswer = ""
    // }
    // var parentalAnswer = this.props.userAnswers[2]
    // if(!parentalAnswer) {
    // parentalAnswer = ""
    // }
    // var frequencyAnswer = this.props.userAnswers[3]
    // if(!frequencyAnswer) {
    // frequencyAnswer = ""
    // }
    // var dataTransferAnswer = this.props.userAnswers[4]
    // if(!dataTransferAnswer) {
    // dataTransferAnswer = ""
    // }
    // var lanPortAnswer = this.props.userAnswers[5]
    // if(!lanPortAnswer) {
    // lanPortAnswer = ""
    // }
    // var NumDevicesAnswer = this.props.userAnswers[6]
    // if(!NumDevicesAnswer) {
    // NumDevicesAnswer = ""
    // }

  // preload.routers.forEach(function(router) {
  //     if(antennaAnswer === "<4"){
  //       if(router['antennas'] <= 4) {
  //       console.log("router")
  //       }
  //     }
  //     if(antennaAnswer === ">4"){
  //       if(router['antennas'] > 4 || router.mesh_network === "TRUE") {
  //     console.log(router)
  //      }
  //     }
  //     })

//     return (
//        <div className='my-container'> 
//         <ShareWidget />
//         <div >
//           <h3 className='question-text'> Router Options </h3>
//         </div>
//           <div className="search">
//           {props.answers}
//           {*preload.routers
//              .filter(router => {
//               if(priceAnswer === "<100"){
//                 if(router['price ($)'] <= 100) {
//                   return router 
//                 }
//               }
//              else if(priceAnswer === "<150"){
//                 if(router['price ($)'] < 150) {
//                   return router 
//                 }
//               } else if(priceAnswer === "<200"){
//                 if(router['price ($)'] < 200) {
//                   return router 
//                 }
//               } else {
//                 return router 
//               }
//              })
//              .filter(router => {
//               if(antennaAnswer === "<4"){
//                   if(router['antennas'] <= 4) {
//                   return router 
//                   }
//                 }
//                 if(antennaAnswer === ">4"){
//                   if(router['antennas'] > 4 || router.mesh_network === "TRUE") {
//                 return router 
//                  }
//                   } else {
//                 return router 
//                   }
//                 })
//             .filter(router => router['MU-MIMO (number of devices)'].indexOf(NumDevicesAnswer) >= 0)
//             .filter(router => router['parent_control_specialty'].indexOf(parentalAnswer) >= 0)
//             .filter(router => router['5ghz frequency'].indexOf(frequencyAnswer) >= 0)
//             .filter(router => router['data_transfer_value (1=<1300; 2>1300 mbps)'].indexOf(dataTransferAnswer) >= 0)
//             .filter(router => {
//               if(lanPortAnswer === ">4"){
//                 if(router['LAN_ports'] >= 4) {
//                   return router
//                 }
//                } else {
//                 return router
//               }
//             }).map( router => <ShowCard key={router.ASIN} {...router}/>)
//           *}
//           </div>
//     </div>
//     )
// }

const mapStateToProps = state => ({
  routers:state.routers,
  PRICE_QUESTION: state.PRICE_QUESTION,
  ROOM_QUESTION:state.ROOM_QUESTION,
  NUM_DEVICES_QUESTION:state.NUM_DEVICES_QUESTION,
  PARENTAL_QUESTION:state.PARENTAL_QUESTION,
  FREQUENCY_QUESTION:state.FREQUENCY_QUESTION,
  DATA_TRANSFER_QUESTION:state.DATA_TRANSFER_QUESTION,
  LAN_PORT_QUESTION:state.LAN_PORT_QUESTION
});

export default connect(mapStateToProps)(Routers)