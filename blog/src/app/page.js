// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <Link href="/products">Products</Link>
//       <Link href="/addproduct">Add Product</Link>
      
//     </main>
//   );
// }
//The above code is used for mongodb database

// the below code is used for mysql database
"use client"
import react, { useEffect, useState } from "react";

export default function MyComponent(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const data = await fetch("/api/posts");

      const response = await data.json();
      setPosts(response)
      //console.log(response)
      //console.log(response.student)
        
      } catch (error) {
        console.log(error)
        
      }
      
    } 
    fetchData()
  },[])
  return(
    <>
    <h1>Home Page</h1>
    {posts.map(student => (
      
      <div>
       
        {student.id},
        {student.stname},
        {student.course},
        {student.fees}

        </div>
    ))}
    </>
  )
}
