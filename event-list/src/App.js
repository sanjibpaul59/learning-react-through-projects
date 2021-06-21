import React, { Component } from "react";
import Event from "./components/newEvent";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-12 col-lg-4">
            <div className="p-5 bg-light rounded-3">
              <Event />
            </div>
          </div>
          <div className="col col-lg-8 col-md-12">
            <div className="p-5 bg-light rounded-3">
              <h1 className="display-5 fw-bold text-center mb-4">
                Upcoming Events
              </h1>
              <div className="row">
                <div className="col col-md-6 col-sm-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Event Name</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Location & Time
                      </h6>
                      <p className="card-text">Music and Pet Information</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6 col-sm-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Event Name</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Location & Time
                      </h6>
                      <p className="card-text">Music and Pet Information</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6 col-sm-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Event Name</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Location & Time
                      </h6>
                      <p className="card-text">Music and Pet Information</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
