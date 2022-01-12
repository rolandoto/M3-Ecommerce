import React from "react";
import UseFilter from '../../hooks/UseFilter'

const COLOR = ['Cinza','Preto','Laranja','Branco','Amarelo','Rosa']
const SIZE =['M','G','GG','U','M','P']
const PRICE =[50,90,160,250,1]

const Filter =({setProducts,preproduct})=>{

    const {handchangeColor,handchangeSize,handchangePrice} = UseFilter({setProducts,preproduct})
     
    return (
            <div>
               <div className='Container-filter'>
                   <h1>Blusas</h1>
                  <div>  
                      <span>COLORES</span>
                      {COLOR.map((fil,index) =>   (
                        <div className='container-color'>
                            <ul >
                                <li key={index.toString()}>    
                                    <label ><input type="checkbox" name='are' value={fil} onChange={handchangeColor}  /></label> 
                                    <div className='flex-color'>
                                        <p>{fil} </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                   </div>

                    <div className='flex-filter'>
                      <span>TAMAÑOS</span>
                      {SIZE.map((fil,index) => (
                          <div className='container-color'>
                                  <ul>
                                    <li  key={index.toString()}>
                                        <button className='button-filter' onClick={()=> handchangeSize(fil)} >{fil}</button>
                                    </li>
                                </ul>
                          </div>
                      ))} 
                  </div>

                 <div>
                  <span>PRECIO</span>
                    {PRICE.map((fil,index) => (
                        <div className='container-color'>
                            <ul >
                                <li key={index.toString()}>
                                    <label ><input type="checkbox" name='are' value={fil} onChange={handchangePrice}  /></label> 
                                     <div className='flex-color'>
                                            <p> apartir ${fil} </p>
                                     </div>
                                </li>
                            </ul>
                        </div>
                    ))} 
                     </div>
                </div>
            </div>
    )
}
export default Filter