import {INPUT_CHANGE, BUTTON_CLICK, DELETE_ITEM} from './actionType'

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