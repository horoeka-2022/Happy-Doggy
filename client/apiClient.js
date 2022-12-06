import request from 'superagent'

export async function postWalkerDetails(objWalkerDetail) {
  return request.post('/api/v1/walker').json(objWalkerDetail)
}
export async function getDogList() {
  let dl = await request
    .get('/api/v1/doglist/')
    .then((response) => response.body)
  return dl
}

export async function fetchImgUrl(id) {
  console.log(id)
  return request.post(`/api/v1/walker/${id}`).send(id)
}

export async function sendEmail(msg) {
  console.log('yo' + { msg })
  return await request.post(`/api/v1/sendemail`).send(msg)
}
