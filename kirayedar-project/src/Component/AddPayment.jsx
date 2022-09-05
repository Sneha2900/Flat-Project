import React from "react";

const AddPayment = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="card m-5 " style={{ height: "380px", width: "600px" }}>
          <div className="card-body">
            <h3 className="card-title m-2">Add Payment</h3>
            <div className="m-5 ">
              <div className="row ">
                <div className="col-10">
                  <label htmlFor="Date">Date</label>
                  <input
                    type="date"
                    className="form-control border border-primary"
                    id="Date"
                    placeholder="Date"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    className="form-control border border-primary"
                    id="Name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="Amount Paid">Amount Paid</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Amount Paid"
                    placeholder="Amount Paid"
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
    </div>
  );
};

export default AddPayment;
