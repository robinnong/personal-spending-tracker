import { SampleData } from '../../components/helpers';

const items = (state = SampleData, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = { ...action.object }; 
      const multiplier = item.type === "income" ? 1 : -1;
      item.price = parseFloat(item.price)*multiplier;
      return [
        // makes a copy of the state and adds new object!
        ...state,
        item 
      ]
    case 'DELETE_ITEM':
      return [...state].filter((item) => item.id !== action.id); 
    default:
      // returns the state unchanged
      return state
  }
}

export default items