import {INPUT_CHANGE, BUTTON_CLICK, DELETE_ITEM, TABLE_LIST} from './actionType'
const defaultState= {
  inputValue : '',
  list:[
      '早上4点起床，锻炼身体',
      '中午下班游泳一小时'
  ]
} //默认数据
// eslint-disable-next-line
export default (state=defaultState, action) => {
  if (action.type) {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
      case INPUT_CHANGE:
        newState.inputValue = action.value
        break
      case BUTTON_CLICK:
        newState.list.push(newState.inputValue)
        newState.inputValue= ''
        break
      case DELETE_ITEM:
        newState.list.splice(action.value, 1)
        break
      case TABLE_LIST:
        newState.list=action.value
        break
      default:
        return newState  
    }
    return newState
  }
  return state
}