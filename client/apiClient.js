import request from 'superagent'

//const walkerUrl = '/api/v1/walker'

export async function postWalkerDetails(objWalkerDetail) {
  console.log(objWalkerDetail)
  //return request.post('/api/v1/walker').send(objWalkerDetail)
}
export async function getDogList() {
  let dl = await request
    .get('/api/v1/dogList/')
    .then((response) => response.body)
  // console.log(dl[0])
  // return request.get('/api/v1/dogList/').then((response) => response.body)
  return dl
}


//get route for booking

//post route for booking
