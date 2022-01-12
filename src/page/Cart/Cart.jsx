import React, { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Container from '../../component/Container/Container'
import EmpyCart from '../../component/EmpyCart/EmpyCart'
import LisCart from '../../component/LisCart/ListCart'
import UseContextProvider  from '../../Context/UseContext'
import UseCart from '../../hooks/UseCart'
import Uselocalstorage from '../../hooks/UselocalStorage'
import Usetitle from '../../hooks/Usetitle'
import State from '../../state/state'


const Cart =() =>{
    const {carts} =useContext(UseContextProvider)
    const {cart} = carts

  
   
    const vert = JSON.parse(localStorage.getItem('cart'))
    console.log(vert)

     useEffect(() =>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
  
    
    Usetitle({title:'Cart'})
    const {handDeleCart,totalPrice} = UseCart()

    if(cart.length ==0) return <EmpyCart/>

        return (
                <Container>
                    <h2  className='Subtitle'>Subtotal $ {totalPrice} </h2>
                    {cart.map(index => (
                    <LisCart    index={index} key={index.id}  handDeleCart={handDeleCart} />
                    ))}
                </Container>
            )
    }
   


export default Cart 