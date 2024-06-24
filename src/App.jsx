import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItem";
import TodoName from "./components/TodoName";

function Start() {
  return (
    <>
      <div className="container">
        <TodoName />
        <TodoAdd />
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </div>
    </>
  );
}

export default Start;
