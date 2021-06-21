import React from "react";
import Input from "./inputField";
import Select from "./selectMenu";
import Checkbox from "./checkBox";
import BaseButton from "./baseButton";

const Event = () => {
  return (
      <div className="card">
        <div className="card-body">
          <form>
            <fieldset>
              <legend className="display-5 fw-bold text-center mb-2">
                Add New Event
              </legend>
              <Input name="Event Name" type="text" />
              <Input name="Venue" type="text" />
              <Input name="Date" type="date" />
              <Checkbox />
              <Select />
              <div className="container">
                <div className="row">
                  <div className="col-6 text-center">
                    <BaseButton
                      type="button"
                      className="btn btn-success"
                      value="Submit"
                    />
                  </div>
                  <div className="col-6 text-center">
                    <BaseButton
                      type="button"
                      className="btn btn-danger"
                      value="Cancel"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
   
  );
};

export default Event;
