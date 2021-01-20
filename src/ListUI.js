import React from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

//UI 组件
const ListUI = (props)=>{
  return (
    <div style={{margin: '10px'}}>
      <Input 
        placeholder='请填写内容'
        style={{width: "300px"}}
        value={props.inputValue}
        onChange={props.inputChange}>
      </Input>
      <Button type="primary" onClick={props.buttonClick}>增加</Button>
      <div style={{margin: '10px'}}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item,index) =>(
          <List.Item
            key={index +item}
            onClick={()=>{props.deleteItem(index)}}>
            {item}
          </List.Item>
          )}>
        </List>
      </div>
    </div>
  )
}
export default ListUI
