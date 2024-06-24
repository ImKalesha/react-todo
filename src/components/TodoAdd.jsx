let TodoAdd = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter todo here"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" className="form-control"/>
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-outline-primary ks-button">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoAdd;
