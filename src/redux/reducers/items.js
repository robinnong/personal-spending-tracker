import { SampleData } from '../../components/helpers';

const items = (state = SampleData, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        // makes a copy of the state and adds new object!
        ...state,
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