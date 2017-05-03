export default function onClickAdd (state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'add':
      return {
        count: count + 10
      }
    default:
      return state
  }
}