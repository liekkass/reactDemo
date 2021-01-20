import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {changeInputAction, buttonClickAction, deleteItemAction} from './store/actionCreators'
import {Input, Button, List} from 'antd'
import store from './store/index'

class list extends Component {
  constructor(props){
    super(props)
    this.inputChange=this.inputChange.bind(this)
    this.buttonClick=this.buttonClick.bind(this)
    this.state = store.getState()

    this.storeChange= this.storeChange.bind(this)
    store.subscribe(this.storeChange)// 订阅Redux指向
  }
  render() { 
    return (
      <div>
        <Input 
          placeholder='请填写内容'
          style={{width: "300px"}}
          value={this.state.inputValue}
          onChange={this.inputChange}>
        </Input>
        <Button type="primary" onClick={this.buttonClick}>增加</Button>
        <div style={{margin: '10px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) =>(
            <List.Item
              key={index +item}
              onClick={this.deleteItem.bind(this,index)}>
              {item}
            </List.Item>
            )}>
          </List>
        </div>
      </div>
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