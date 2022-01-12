import React from "react";
import Card from "../Card/Card";


const Showproduct =({products}) =>{
 
    //De esta manera, se asegurará de que su clave no esté duplicada.
    //{products.map((prev ,index)=> (
    //               <Card key={index} productAll={prev} />
    //            ))}
    return (
        <div>
            <div className='ShowProducts'>
                {products.map((prev ,index)=> (
                    <Card key={index} productAll={prev}  />
                ))}
            </div>
        </div>
    )   
}

export default Showproduct