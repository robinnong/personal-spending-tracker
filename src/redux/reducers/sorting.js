 const sorting = (state = {column: "date", direction: false}, action) => {

  switch (action.type) {
    case 'SORT_COLUMN':  
    if (action.text === "name") {
      return { column: action.text, direction: true } 
    } else if (action.text === "category" || action.text === "date") {
      return { column: action.text, direction: false } 
    } else {
      return { column: action.text, direction: true } 

    }
    default:
      return state
  }
}

export default sorting