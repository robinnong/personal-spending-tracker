let nextItemId = 0

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const SET_FILTER = 'SET_FILTER'

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

export const setFilter = filter => ({
  type: SET_FILTER, 
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
}
