import React from "react";
import Card from "../Card/Card";


const Showproduct =({products}) =>{
    
    return (
        <div>
            <div className='ShowProducts'>
                {products.map((prev ,index)=> (
                    <Card key={index} productAll={prev} />
                ))}
            </div>
        </div>
    )   
}

export default Showproduct