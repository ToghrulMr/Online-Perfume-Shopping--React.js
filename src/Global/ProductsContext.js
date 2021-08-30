import React, {createContext, useState} from "react"

import perfume1 from "../assets/perfume1.jpg"
import perfume2 from "../assets/perfume2.jpg"
import perfume3 from "../assets/perfume3.jpg"
import perfume4 from "../assets/perfume4.jpg"
import perfume5 from "../assets/perfume5.jpg"
import perfume6 from "../assets/perfume6.jpg"
import perfume7 from "../assets/perfume7.jpg"
import perfume8 from "../assets/perfume8.jpg"
export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
   const [products] = useState ([
       {id:1, name:'Perfume1', price:300, image: perfume1, status:'hot'},
       {id:1, name:'Perfume2', price:450, image: perfume2, status:'new'},
       {id:1, name:'Perfume3', price:550, image: perfume3, status:'hot'},
       {id:1, name:'Perfume4', price:750, image: perfume4, status:'new'},
       {id:1, name:'Perfume5', price:300, image: perfume5, status:'hot'},
       {id:1, name:'Perfume6', price:450, image: perfume6, status:'new'},
       {id:1, name:'Perfume7', price:550, image: perfume7, status:'hot'},
       {id:1, name:'Perfume8', price:750, image: perfume8, status:'new'}
   ]);
    return(
<ProductsContext.Provider value={{products: [...products]}}>
{props.children}
</ProductsContext.Provider>
    )
}
export default ProductsContextProvider;