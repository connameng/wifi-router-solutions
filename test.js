var util = require('./util')
var data = require('./public/routerdata.json')
// console.log(data.routers)
function createPermutation() {

	var combos = util.product([100,150,200,1000], ['<4','>4'], ['TRUE', ''], ['TRUE', ''], [1,2], ['>4', ''], ['TRUE', ''])
	console.log("Missing combos:")
	var counter = 0
	for(let i = 0; i < combos.length; i++) {

		var filtered = data.routers
            .filter(router => {
              if(combos[i][0] === 100){
                if(router['price ($)'] <= 100) {
                  return router 
                }
              }
             else if(combos[i][0] === 150){
                if(router['price ($)'] < 150) {
                  return router 
                }
              } else if(combos[i][0] === 200){
                if(router['price ($)'] < 200) {
                  return router 
                }
               } else if(combos[i][0] === 1000){
                  return router 
              }
             })
            .filter(router => {
              if(combos[i][1] === "<4"){
                  if(router['antennas'] <= 4) {
                  	return router 
                  }
                }
                if(combos[i][1] === ">4"){
                  if(router['antennas'] > 4 || router.mesh_network === "TRUE") {
	                return router 
	                 }
                  }
                })
            .filter(router => router['MU-MIMO (number of devices)'].indexOf(combos[i][6]) >= 0)
            .filter(router => router['parent_control_specialty'].indexOf(combos[i][2]) >= 0)
            .filter(router => router['5ghz frequency'].indexOf(combos[i][3]) >= 0)
            .filter(router => router['data_transfer_value (1=<1300; 2>1300 mbps)'].indexOf(combos[i][4]) >= 0)
            .filter(router => {
              if(combos[i][5] === ">4"){
                if(router['LAN_ports'] >= 4) {
                  return router
                }
               } else {
                return router
              }
            })

            if(filtered.length === 0) {
            	counter += 1
            	console.log(combos[i])
            }
	}
	console.log(counter)
}
createPermutation()