

import products from '../products'

const Home = () => {
   return (
    <div className="div">
    <h1 className = "text"> Mobile shop </h1>
    <h3 className = "text"> Iphone's </h3>
   
    <img src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;.v=1567022175704"/>
   <div className = "products">

     {products.map(product => {
       return (
         <div className="products-div">
            <img className = "product-image" src ={product.imageUrl} /> 
            <p> Name: {product.name}</p>
            <p>Price: {product.price}</p>
            
         </div>
       )
     })}
   </div>

  </div>

   )
}

export default Home