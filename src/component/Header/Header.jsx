import React, { useContext } from "react";
import logo from '../../img/logo-m3.png'
import { BsBagFill } from "react-icons/bs";
import {Link} from'@reach/router'
import UseContextProvider  from "../../Context/UseContext";
const Header =() =>{
    
const {carts} = useContext(UseContextProvider)
const {cart} = carts


    return (
        <div>
            <header className='Header'>
                <div className='Header-top'>
                    <Link to='/'>
                     <a>
                        <img src={logo} alt="" />
                    </a>
                    </Link>

                    <div>
                        <Link to='/Cart'>
                             <a>
                            <BsBagFill size={25} color='black' ></BsBagFill> <span className='cart-length'>{cart.length} </span>
                             </a>
                        </Link>
                    </div>
                </div>
                <div className='line'>

                </div>
            </header>
        </div>
    )
}

export default Header