const initState = [
  {
    id: 1,
    title: 'Apple',
    price: 8888,
    amount: 10
  }
]

export default (state = initState, action) => {
  switch (action.type) {
    case 'test':
      return []
    default:
      return state
  }
}
