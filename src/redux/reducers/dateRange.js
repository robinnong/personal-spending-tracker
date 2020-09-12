const dateRange = (state = "2019-11", action) => {
  switch (action.type) {
    case 'SET_DATE':
      return action.text
    default:
      return state
  }
}

export default dateRange