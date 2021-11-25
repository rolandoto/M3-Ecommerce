import React from 'react'
import Showproduct from '../../component/Showproduct/Showproduct'
import Container from '../../component/Container/Container'
import UsegetService from '../../hooks/UsegetService'
import Filter from '../../component/Filter/Filter'
import Usetitle from '../../hooks/Usetitle'

const Home =()=>{

  const {products,setProducts,preproduct,setProduct,setPage} = UsegetService()
  
  const totalProduct =  products? `Productos ${products.length}` : null
  Usetitle({title:totalProduct})

  //cargan mas productos
  const handNext =() =>{
    setPage(pre => pre+1)
  }
    
    if(!products  ) return null
    return (
      <div>
        <div className='container-Home'>
              <Filter
                      setProducts={setProducts} 
                      preproduct={preproduct}
                      setProduct={setProduct}
                       />
              <Container>
                  <Showproduct  product={products} />  
                      <div className='container-botton'>
                          {products.length>0 && (
                            <button className='botton-max' onClick={handNext}>CARGAR MAS</button>               
                          ) } 
                      </div >
              </Container>  
           </div>
      </div>
           
        )  
    }
export default Home