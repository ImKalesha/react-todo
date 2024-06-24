let TodoItems = () => {
  let todoName = "Wakeup";
  let date = '24/06/2024';
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-outline-danger ks-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
