const fromGetservice =(prevent) =>{
    const products = prevent   
    if(Array.isArray(products)){
    const tatalresult = products.map(img =>{
        const {id,name,image,price,parcelamento,color,size} = img
        
        return {id,
                name,
                image,
                price,
                parcelamento,
                color,
                size}
    })
        return tatalresult
    } 
}


const Service =({page}={})=> {
    
    const url =`http://localhost:3000/products?_limit=3&_page=${page *1}`
    return fetch(url)
    .then(resp => resp.json())
    .then(fromGetservice)
}

export default Service