 const sorting = (state = {column: "date", direction: true}, action) => {

  switch (action.type) {
    case 'SORT_COLUMN':  
      return { column: action.text, direction: !state.direction } 
    default:
      return state
  }
}

export default sorting