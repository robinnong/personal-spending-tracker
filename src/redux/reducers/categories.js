import { SampleData } from '../../components/helpers';

const temp = SampleData.map(item => item.category)

const categories = (state = temp, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      const arr = [...state].push(action.text);
      console.log(arr)
      // return arr.filter((num, i) => arr.indexOf(num) === i);
      return arr
    default: 
      return state
  }
}

export default categories