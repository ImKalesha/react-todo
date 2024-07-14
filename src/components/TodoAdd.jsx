import { useState } from "react";
import styles from "./TodoAdd.module.css";
import { MdAddAlarm } from "react-icons/md";
import { useRef, useContext } from "react";
import { TodoItemsContext } from "../contexts/todo-items-context";
import { useReducer } from "react";


function TodoAdd() {
  const { addNewItem } = useContext(TodoItemsContext);

  // const [todoName, setTodoName] = useState('');
  // const [todoDate, setTodoDate] = useState('');

  const todoNameRef = useRef('');
  const todoDateRef = useRef('');


  // let onChangeTodoName = (value) => {
  //   setTodoName(value)
  // };

  // let onChangeTodoDate = (value) => {
  //   setTodoDate(value)
  // };

  const handleAddButtonClick = () => {
    addNewItem(todoNameRef.current.value, todoDateRef.current.value);
    todoNameRef.current.value = '';
    todoDateRef.current.value = '';
    // setTodoName('')
    // setTodoDate('')
  
  };

  return (
    <>
      <div className={styles.todoContainer}>
        <div className="row justify-content-md-center">
          <div className="col-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter todo here"
              className="form-control"
              ref={todoNameRef}
              // onChange={(e) => onChangeTodoName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name=""
              id=""
              className="form-control"
              ref={todoDateRef}
              // value={todoDate}
              // onChange={(e) => onChangeTodoDate(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              class="btn btn-outline-primary ks-button"
              onClick={handleAddButtonClick}
            >
              <MdAddAlarm/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoAdd;
