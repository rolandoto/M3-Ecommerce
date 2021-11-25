import {useRef,useEffect} from 'react'

const  Usetitle =({title})=>{
    //obtiene el title original
    const preTitle = useRef(document.title)

    useEffect(() =>{
        const previusTitle = preTitle.current

         if(title){
             document.title = `${title} | M3 Performarce Digital`
         }
         return () => document.title = previusTitle  
    })
}

export default Usetitle