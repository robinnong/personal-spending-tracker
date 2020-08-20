import { SampleData } from '../../components/helpers';

const temp = SampleData.map(item => item.category)

const categories = (state = temp, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      if (!state.includes(action.text)) {
        const arr = [...state]; 
        arr.push(action.text); 
        return arr;
      } else {
        return state
      } 
    default: 
      return state
  }
}

export default categories