import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";
import TodoName from "./components/TodoName";
import styles from "./app.module.css";
import { useState } from "react";
import { TodoItemsContext } from "./contexts/todo-items-context";

function Start() {
  const [todoItems, setTodoItems] = useState([]);

  let addNewItem = (todoName, todoDate) => {
    let newTodoItems = [...todoItems, { name: todoName, date: todoDate }];
    setTodoItems(newTodoItems);
  };

  let deleteItem = (todoName) => {
    let newTodoItems = todoItems.filter((item) => item.name != todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className={styles.container}>
        <TodoItemsContext.Provider
          value={{
            todoItems,
            addNewItem,
            deleteItem,
          }}
        >
          <TodoName />
          <TodoAdd/>
          <TodoItems/>
        </TodoItemsContext.Provider>
      </div>
    </>
  );
}

export default Start;
