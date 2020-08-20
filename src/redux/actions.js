
import { SampleData } from '../components/helpers';
let nextItemId = SampleData.length

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const ADD_CATEGORY = 'ADD_CATEGORY'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
const SET_FILTER = 'SET_FILTER'
const SORT_COLUMN = 'SORT_COLUMN'

// Action creators
export const addItem = object => ({ 
    type: ADD_ITEM, 
    id: nextItemId++,
    object
})

export const deleteItem = id => ({
  type: DELETE_ITEM, 
  id
})

export const addCategory = text => ({
  type: ADD_CATEGORY,
  text
})

export const removeCategory = text => ({
  type: REMOVE_CATEGORY,
  text
})

export const sortColumn = text => ({
  type:  SORT_COLUMN,
  text
})

export const setFilter = text => ({
  type: SET_FILTER, 
  text
})