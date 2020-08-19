const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        // makes a copy of the state
        ...state,
        // Adding a new object onto the state array! 
        action.object 
      ]
    case 'DELETE_ITEM':
      return [...state].filter((item) => item.id !== action.id); 
    default:
      // returns the state unchanged
      return state
  }
}

export default items