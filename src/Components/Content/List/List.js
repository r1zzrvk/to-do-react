import React from "react";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  return(
    <div className='row justify-content-center'>
      <ul>
        {props.filtered.map( todo => (
            <ListItem 
            todo={todo} 
            key={todo.id}
            todos={props.todos}
            setTodos={props.setTodos}/>
        ))}
      </ul>
    </div>
  )
};

export default List;