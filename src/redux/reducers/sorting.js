 const sorting = (state = {column: "date", direction: false}, action) => {

  switch (action.type) {
    case 'SORT_COLUMN':  
      return (action.text === "category" || action.text === "date") 
        ? { column: action.text, direction: false }  
        : { column: action.text, direction: true } 
    default:
      return state
  }
}

export default sorting