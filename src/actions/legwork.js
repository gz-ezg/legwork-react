import actionTyps from './actionType'

const setTaskingList = payload => {
  console.log(payload)
  return dispatch => {
    // 测试异步请求
    setTimeout(() => {
      dispatch({
        type: actionTyps.SETTASKINGLIST,
        payload
      })
    }, 0)
  }
}

const setLegworkList = payload => {
  console.log(payload)
  return {
    type: actionTyps.SETLEGWORKLIST,
    payload
  }
}

export { setTaskingList, setLegworkList }
