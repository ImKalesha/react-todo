import { RiDeleteBin6Line } from "react-icons/ri";

let TodoItem = ({ todoName, todoDate, handleDelete }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-danger ks-button"
              onClick={() => handleDelete(todoName)}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
