import { useContext } from "react";
import { TodoItemsContext } from "../contexts/todo-items-context";
import TodoItem from "./TodoItem";

let TodoItems = () => {
  const {todoItems, deleteItem} = useContext(TodoItemsContext);
  return (
    <>
      {
        todoItems.map((item) => (
          <TodoItem key={item.name} todoName={item.name} todoDate={item.date} handleDelete={deleteItem}></TodoItem>
        ))
      }
    </>
  )

}

export default TodoItems;