import React  from "react";
import UseCart from "../../hooks/UseCart";


const Card =({productAll}) =>{
    const {handCart} = UseCart()
    
    return (
        <div className='Card' >
                    <img className='Card-image' src={productAll.image} alt={productAll.name} loading='lazy' />
                    <span className='Card-text'>{productAll.name}</span>
                    <span className='Card-text Card-text-black'>R$ {productAll.price},00</span>
                    <span className='Card-text'>$ ate{productAll.parcelamento[0]}x de ${productAll.parcelamento[1]} </span>
            <button className='Detail-addToCart' type='submit' onClick={() =>handCart(productAll)}  >
                COMPRAR
            </button >
        </div>
    )
}

export default Card