import React from 'react';

const BaseButton = ({type,className,value})=>{
    return(
    <div className="mb-3">
        <button type={type} className={className}>{value}</button>
    </div>
    )

};

export default BaseButton;