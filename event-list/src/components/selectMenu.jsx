import React from "react";

const Select = () => {
  return (
    <div className="mb-3">
      <label htmlFor="form-select" className="mb-2">
        How many pets/attendee Allowed?
      </label>
      <select className="form-select" aria-label="Default select example">
        <option defaultValue="0">None</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default Select;
