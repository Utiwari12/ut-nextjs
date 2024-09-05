import { headers } from 'next/headers';
import React from 'react'
const getProducts = async () => {
   let data = await fetch("http://localhost:3000/api/products");
   
      data = await data.json();
      console.log(data);
      if (data.success) {
        return { success: true, data: data.data }; //returning data
      } else {
        return { success: false};
      }

};



export default async function Page() {
  const products = await getProducts();
  
  console.log(products);
    
  return (
    <div>
      <h1>Product List</h1>
      <table border={1}>
      <td>Category</td>
          
        
        
        
      
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Company</td>
            <td>Color</td>
            </tr>
          
           {
            Array.isArray(products) &&
            products.map((product) => (
           <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.company}</td>
            <td>{product.color}</td>
            <td>{product.category}</td>
          </tr>
            )       
            )
         } 
         
        
      </table>
    </div>
  );
}

// export async function getProducts() {
//   const data = await fetch("http://localhost:3000/api/products", {
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
// }