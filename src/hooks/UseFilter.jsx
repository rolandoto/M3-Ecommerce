

const UseFilter =({setProducts,preproduct}) =>{
    //filtrar 
    const filtrar=(terminoBusqueda)=>{
    let resultadosBusqueda=preproduct.filter((elemento)=>{
        if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.color.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.price.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.size.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())  
        ){
        return elemento;
        }
    });
    setProducts(resultadosBusqueda);
    }

        const sizePrice =(event) =>{
            //filtrar por precio
            let resultadosBusqueda=preproduct.filter((elemento)=>{
                if(event ==50){
                const total = elemento.price <event
                return total
                }else if(event==90){
                const total = elemento.price >50 && elemento.price < 150
                return total
                }else if(event==160){
                const total = elemento.price >151 && elemento.price < 300
                return total
                }else if(event==250){
                const total = elemento.price >300 && elemento.price < 500 
                return total
                }else if(event==1){
                const total = elemento.price >1
                return total
                }
            });
            setProducts(resultadosBusqueda);
            } 

    return {
            handchangeColor:e => filtrar(e.target.value),
            handchangeSize: e => filtrar(e.target.value),
            handchangePrice:e => sizePrice(e.target.value)
            }

}

export default UseFilter