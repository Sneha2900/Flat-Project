import React from "react";

const AddRent = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card m-5 " style={{ height: "520px", width: "600px" }}>
          <div className="card-body">
            <h3 className="card-title m-2">Add Rent</h3>
            <div className="m-5 ">
              <div className="row ">
                <div className="col-10">
                  <label htmlFor="Rent">Rent</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Rent"
                    placeholder="Rent"
                    required
                  />
                </div>
                <div className="col-10 ">
                  <label htmlFor="Unit Start">Unit Start</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Unit Start"
                    placeholder="Unit Start"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <label htmlFor="Unit End">Unit End</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Unit End"
                    placeholder="Unit End"
                    required
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="Total Units">Total Units</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Total Units"
                    placeholder="Total Units"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <label htmlFor="Rent">Bill</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Rent"
                    placeholder="Bill"
                    required
                  />
                </div>
                <div className="col-10">
                  <label htmlFor="Rent">Total</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Rent"
                    placeholder="Total"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-1">
              <button type="submit" class="btn btn-outline-primary btn-lg">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary btn-lg ms-3">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRent;
