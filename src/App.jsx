import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";
import TodoName from "./components/TodoName";
import styles from "./app.module.css";
import { TodoItemsContext } from "./contexts/todo-items-context";
import { useReducer } from "react";

const todoItemsReducer = (currentState, action) => {
  let currentItems = currentState;

  if (action.type === "NEW_ITEM") {
    currentItems = [
      ...currentItems,
      { name: action.payload.todoName, date: action.payload.todoDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    currentItems = currentItems.filter((item) => item.name != action.payload.todoName);
  }
  return currentItems;
};

function Start() {
  const [todoItems, dispatch] = useReducer(todoItemsReducer, []);

  let addNewItem = (todoName, todoDate) => {
    dispatch({
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    });
  };

  let deleteItem = (todoName) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        todoName
      }
    })
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
          <TodoAdd />
          <TodoItems />
        </TodoItemsContext.Provider>
      </div>
    </>
  );
}

export default Start;
