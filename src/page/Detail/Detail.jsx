import  React from 'react'

import UsegetService from '../../hooks/UsegetService'


const Detail =({id})=>{
   
    const {productUnica} = UsegetService({id})
    
    if(!productUnica) return null

    return(
         <div className='Card' >
                <h1>Detail</h1>
                    <img className='Card-image' src={productUnica.image} alt={productUnica.name} loading='lazy' />
                    <span className='Card-text'>{productUnica.name}</span>
                    <span className='Card-text Card-text-black'>R$ {productUnica.price},00</span>
                    <span className='Card-text'>$ ate{productUnica.parcelamento[0]}x de ${productUnica.parcelamento[1]} </span>
        </div>
    )
}
export default Detail