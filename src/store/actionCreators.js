import {INPUT_CHANGE, BUTTON_CLICK, DELETE_ITEM, TABLE_LIST} from './actionType'

export const changeInputAction = (value) => ({
  type: INPUT_CHANGE,
  value
})
export const buttonClickAction = () => ({
    type: BUTTON_CLICK
})
export const deleteItemAction = (value) => ({
  type: DELETE_ITEM,
  value
})
export const getTaleList=(value)=>({
  type: TABLE_LIST,
  value
})