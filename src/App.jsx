import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";
import TodoName from "./components/TodoName";
import styles from "./app.module.css";
import TodoItemsContextProvider from "./contexts/todo-items-context";

function Start() {
  return (
    <>
      <div className={styles.container}>
        <TodoItemsContextProvider>
          <TodoName />
          <TodoAdd />
          <TodoItems />
        </TodoItemsContextProvider>
      </div>
    </>
  );
}

export default Start;
