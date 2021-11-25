import React from "react";

const Price =({price, currency='$'}) =>{
    return (
        <span className='Price'>
            <span className='Price-symbol'>{currency}</span>
            <span className='Price-whole'>{price}</span>
            <span className='Price-fraction'></span>
        </span>
    )
}

export default Price