"use client"
import React, { useState } from "react";
import "../style.css";
export default function Page() {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [company,setCompany] = useState("");
    const [color,setColor] = useState("");
    const [category,setCategory] = useState("");

    const clearProduct = () => {
        setName("");
        setPrice("");
        setCompany("");
        setColor("");
        setCategory("");
    };

    const addProduct = async () => {
        const product = {
            name,
            price,
            company,
            color,
            category
        };
    
        try {
            const response = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    alert("Product added");
                } else {
                    console.log("Failed");
                }
            } else {
                console.log("Failed to add product");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };
    return (
        <div>
            <h1>Add Product</h1>
            <p>Enter Product Details</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Enter productname" />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="input" placeholder="Enter price" />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="input" placeholder="Enter company" />
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="input" placeholder="Enter color" />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="input" placeholder="Enter category" />
            <button className="btn" onClick={addProduct}>Add Product</button>
            <button className="btn" onClick= {clearProduct}>Clear All</button>

        </div>
    );
}
