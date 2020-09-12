import { SampleData, Months } from '../../components/helpers'; 

const items = (state = SampleData, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = { ...action.object }; 
      const multiplier = item.type === "income" ? 1 : -1;
      item.price = parseFloat(item.price)*multiplier;

      const index = parseInt(item.date.substring(5, 7));
      const month = Months[index];
      const day = item.date.substring(8, 10);  
      item.dateString = `${day} ${month}` 
      return [
        // makes a copy of the state and adds new object!
        ...state,
        item 
      ]
    case 'DELETE_ITEM':
      return [...state].filter((item) => !action.array.includes(item.id)); 
    default:
      // returns the state unchanged
      return state
  }
}

export default items