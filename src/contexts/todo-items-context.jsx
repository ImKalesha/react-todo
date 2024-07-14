import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currentState, action) => {
  let currentItems = currentState;

  if (action.type === "NEW_ITEM") {
    currentItems = [
      ...currentItems,
      { name: action.payload.todoName, date: action.payload.todoDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    currentItems = currentItems.filter(
      (item) => item.name != action.payload.todoName
    );
  }
  return currentItems;
};

const TodoItemsContextProvider = ({ children }) => {
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
        todoName,
      },
    });
  };
  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        {children}
      </TodoItemsContext.Provider>
    </>
  );
};

export default TodoItemsContextProvider;
