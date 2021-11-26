import { useEffect, useState } from "react"
import Service from "../service/Service"

const INITIAL =0
const UsegetService =() =>{
    const [page,setPage] = useState(INITIAL)
    const [loading,setLoading] =useState(false)
    const [preproduct,setProduct] = useState()
    const [products,setProducts] = useState()
   
    useEffect(() => {
        setLoading(true)
        Service().then(index => {
            setProduct(index)
            setProducts(index)
            setLoading(false)
        })
    },[])

    useEffect(()=> {
        setLoading(true)
        if(page ===INITIAL)return
              Service({page}).then(index =>{
                setProduct(pre => pre.concat(index))
                setProducts(pre => pre.concat(index))
                setLoading(false)
            })
    },[page])    

    return {products,
            setProducts,
            preproduct,
            setProduct,
            loading,
            setPage}
}


export default UsegetService