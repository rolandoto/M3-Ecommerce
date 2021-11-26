import { useContext } from 'react'
import  UseContextProvider  from '../Context/UseContext'


const UseCart =() =>{

    const {carts,setCart} = useContext(UseContextProvider)
    const {cart} = carts

    const handCart =(event)=>{
        const CartDiferent = cart.find(index => index.id ===event.id)
            if(CartDiferent){
                CartDiferent.quantity +=1   
                CartDiferent.price+=CartDiferent.price
            }else{
                setCart({
                ...carts,
                cart:[...carts.cart,{...event,quantity:1}]
            })
        }
    }

    const handDeleCart =(event)=>{
        setCart({
            ...carts,
            cart:[...carts.cart.filter(index => index.id !=event.id)]
        })
    }

    const totalPrice = cart.reduce((acumlator,currentValue) => acumlator + currentValue.price,0)


    
    return {
        handCart,
        handDeleCart,
        totalPrice
    }

}

export default UseCart