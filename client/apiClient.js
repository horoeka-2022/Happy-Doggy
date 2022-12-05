import request from 'superagent'

//const walkerUrl = '/api/v1/walker'

export async function postWalkerDetails(objWalkerDetail) {
  return request.post('/api/v1/walker').send(objWalkerDetail)
}
export async function getDogList() {
  let dl = await request
    .get('/api/v1/doglist/')
    .then((response) => response.body)

  // return request.get('/api/v1/dogList/').then((response) => response.body)
  return dl
}

export async function fetchImgUrl(id) {
  console.log(id)
  return request.post(`/api/v1/walker/${id}`).send(id)
}

//get route for booking

//post route for booking
