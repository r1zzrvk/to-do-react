import React from "react";
import Input from "./Input/Input";
import List from "./List/List";

const Content = (props) => {
  return (
    <div className='d-flex justify-content-center pt-3'>
      <div className='flex-row'>
      <Input 
      inputText={props.inputText}
      setInputText={props.setInputText}
      setTodos={props.setTodos}
      todos={props.todos}
      setFilter={props.setFilter}/>
      <div className='d-flex justify-content-center pt-3'>
      <h4>Tasks: {props.todos.length}</h4>
      </div>
      <List 
      todos={props.todos} 
      setTodos={props.setTodos}
      filtered={props.filtered}/>
    </div>
    </div>
  )
};

export default Content;