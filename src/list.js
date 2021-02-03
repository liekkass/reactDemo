import React, { Component } from 'react';
import {changeInputAction, buttonClickAction, deleteItemAction, getSagaListData} from './store/actionCreators'
import store from './store/index'
import ListUI from './ListUI'

class list extends Component {
  constructor(props){
    super(props)
    this.inputChange=this.inputChange.bind(this)
    this.buttonClick=this.buttonClick.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.state = store.getState()
    this.storeChange= this.storeChange.bind(this)
    store.subscribe(this.storeChange)// 订阅Redux指向
  }
  componentDidMount(){
    // const action = getTodoList() // 使用redux_thunk
    const action = getSagaListData()
    store.dispatch(action)
  }
  render() { 
    return (
      <ListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        inputChange={this.inputChange}
        buttonClick={this.buttonClick}
        deleteItem={this.deleteItem}>
      </ListUI>
    )
  }
  inputChange(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  buttonClick(){
    const action = buttonClickAction()
    store.dispatch(action)
  }
  deleteItem(index){
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
}
export default list