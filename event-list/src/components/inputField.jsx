import React from 'react';

const Input = ({name,type}) => {
    return ( 
        <div className="mb-3">
            <label className="form-label">{name}</label>
            <input type={type} className="form-control"/>
        </div>
     );
}
 
export default Input;
