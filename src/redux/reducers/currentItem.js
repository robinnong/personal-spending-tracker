const currentItem  = (state = {}, action) => { 
  switch (action.type) {
    case 'SET_CURRENT_ITEM':  
      let currentItem = { ...state }; 
      currentItem[action.object.field] = action.object.val.toLowerCase();
      return currentItem; 
    case 'ADD_ITEM':  
      return { name: "", category: "", price: 0, date: "" };
    default:
      return state;
  }
}

export default currentItem;