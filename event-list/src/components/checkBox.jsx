import React from 'react';

const Checkbox = () => {
    return (
<div className="mb-3">
    <label className="mb-2">Music</label>
    <div className="form-check">
        <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" className="form-check-input" />
        <label htmlFor="flexRadioDefault1" className="form-check-label">Yes</label>
    </div>
    <div className="form-check">
        <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" className="form-check-input" />
        <label htmlFor="flexRadioDefault2" className="form-check-label">No</label>
    </div>
</div>

    );
};

export default Checkbox;