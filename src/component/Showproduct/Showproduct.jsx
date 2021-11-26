import React from "react";
import Card from "../Card/Card";


const Showproduct =({products}) =>{
    
    return (
        <div>
            <div className='ShowProducts'>
                {products.map(prev=> (
                    <Card key={prev.id} productAll={prev} />
                ))}
            </div>
        </div>
    )   
}

export default Showproduct