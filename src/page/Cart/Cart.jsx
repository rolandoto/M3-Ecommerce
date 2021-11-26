import React, { useContext } from 'react'
import Container from '../../component/Container/Container'
import EmpyCart from '../../component/EmpyCart/EmpyCart'
import LisCart from '../../component/LisCart/ListCart'
import UseContextProvider  from '../../Context/UseContext'
import UseCart from '../../hooks/UseCart'
import Usetitle from '../../hooks/Usetitle'


const Cart =() =>{
    const {carts} =useContext(UseContextProvider)
    const {cart} = carts

    Usetitle({title:'Cart'})
    const {handDeleCart,totalPrice} = UseCart()
    
    if(cart.length ===0) return <EmpyCart />  
   
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