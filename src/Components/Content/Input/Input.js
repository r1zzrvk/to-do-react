import React from "react";

const Input = (props) => {

  const handleChange = (e) => {
    props.setInputText(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos, { text: props.inputText, completed: false, id: Math.random() * 1000 }
    ]);
    props.setInputText('');
  };

  const filterHandler = (e) => {
    props.setFilter(e.target.value)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <input
            type="text"
            placeholder="Type something..."
            onChange={handleChange}
            value={props.inputText} 
            className="col-auto py-1"/>
          <div className="col-auto py-1">
            <button
              type='submit'
              className="btn btn-outline-dark btn-lg"
            >submit
            </button>
          </div>
        <div className="col-auto py-1">
          <select onChange={filterHandler}
          className="form-select form-select-lg ">
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
          </select>
        </div>
        </div>
      </form>
    </div>
  )
};

export default Input;