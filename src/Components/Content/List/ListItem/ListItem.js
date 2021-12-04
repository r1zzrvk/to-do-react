import React from "react";
import check from "../..//..//img//checkmark-square-outline.svg";

const ListItem = (props) => {
  const deleteButton = () => {
    props.setTodos(props.todos
      .filter(el => el.id !== props.todo.id))
  };
  const completeButton = () => {
    props.setTodos(props.todos.map(item => {
      if (item.id === props.todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  }
  return (
    <div className='d-flex flex-row justify-content-center align-items-baseline'>
      <div className='pt-4'>
        <li style={{maxWidth:'500px',minWidth:'500px'}}>
          <p style={{overflowWrap:"break-word"}}>
          {props.todo.text}
          </p>
        </li>
      </div>
      <div className="p-2">
        <button onClick={completeButton}
        className={`${props.todo.completed ? "btn btn-success btn-sm" : "btn btn-outline-success btn-sm"}`}>{`${props.todo.completed ? "completed" : "complete"}` }</button>
      </div>
      <div>
        <button onClick={deleteButton}
        className='btn btn-outline-danger btn-sm'>delete</button>
      </div>
    </div>
  )
};

export default ListItem;