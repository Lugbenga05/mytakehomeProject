import React from 'react'
import ProductCard from '../ProductCard'

const ProductPage = () => {
  const [show, setShow] = useState(false)


  return (
    <>
    <h1>Product Page</h1>
    <section>
       <ProductCard>
        <div>title={title}</div>
        <div>price={price}</div>
        <div>category={category}</div>
        <div>description={description}</div>

       </ProductCard>
        
    </section>
    
    </>
  )
}

export default ProductPage
