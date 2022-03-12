const fromServiceUnica =(prevent) =>{
        const {id,name,image,price,parcelamento,color,size} = prevent
        return {id,
                name,
                image,
                price,
                parcelamento,
                color,
                size}
    
}

const ProductService =({id})=> {
    
    const url =`https://api-m3-ecommerce.herokuapp.com/products/${id}`
    return fetch(url)
    .then(resp => resp.json())
    .then(fromServiceUnica)
}

export default ProductService
