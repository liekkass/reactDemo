import React, { Component } from 'react';
import {changeInputAction, buttonClickAction, deleteItemAction, getTaleList} from './store/actionCreators'
import store from './store/index'
import ListUI from './ListUI'
import axios from 'axios'

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
    axios.get('https://www.fastmock.site/mock/0cd1ac7447e5d2cef420a29a4ab29730/tableList/api/getTableList').then(data =>{
      const action = getTaleList(data.data.data.list)
      store.dispatch(action)
    })
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