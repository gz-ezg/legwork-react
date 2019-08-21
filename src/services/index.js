import request from './request'
const userLogin = data => {
  return request({ url: 'user/login', method: 'POST', data })
}
const getToDoTaskListByUserId = data => {
  return request.get('/task/getToDoTaskListByUserId', { params: data })
}
const getFinishedLegworkTask = data => {
  return request.get('user/legwork/finished/list', { params: data })
}
const checkStatus = data => {
  return request.get('user/legwork/check/status', { params: data })
}
const getTaskPropertyDetailByTaskId = data => {
  return request.get('task/getTaskPropertyDetailByTaskId', { params: data })
}
const legworkBegin = data => {
  return request.post('user/legwork/begin', { data })
}
const imgUpload = data => {
  return request.post('user/legwork/task/img/upload', data)
}
const legworkEnd = data => {
  return request.post('user/legwork/end', data)
}
export {
  getToDoTaskListByUserId,
  userLogin,
  getFinishedLegworkTask,
  checkStatus,
  getTaskPropertyDetailByTaskId,
  legworkBegin,
  imgUpload,
  legworkEnd
}
