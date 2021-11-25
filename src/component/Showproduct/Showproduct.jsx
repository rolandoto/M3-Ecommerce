import React from "react";
import Card from "../Card/Card";


const Showproduct =({product}) =>{
    return (
        <div>
            <div className='ShowProducts'>
                {product.map(prev=> (
                    <Card key={prev.id} productAll={prev} />
                ))}
            </div>
        </div>
    )   
}

export default Showproduct