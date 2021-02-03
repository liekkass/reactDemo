import {INPUT_CHANGE, BUTTON_CLICK, DELETE_ITEM, TABLE_LIST, SAGA_LIST} from './actionType'
import axios from 'axios'
import store from './index'

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

export const getSagaListData=(value)=>({
  type: SAGA_LIST
})

export const getTodoList=()=>{
  return ()=>{
    axios.get('https://www.fastmock.site/mock/0cd1ac7447e5d2cef420a29a4ab29730/tableList/api/getTableList').then(res =>{
      const data = res.data.data.list
      const action = getTaleList(data)
      store.dispatch(action)    
    })
  }
}