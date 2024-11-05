"use client"
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "./products.css"

const page = () => {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data)
        }
        catch (err) {
            console.log(err.message);

        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
            <Navbar />
            <div className="cards">
            {
                products.map((product)=>{
                    return(
                        <>
                        <div className="card">

                     <h1>{product.title}</h1>
                     <img src={product.image} width={"100px"} height={"100px"}/>
                     <button className='btn btn-primary'>Buy Now</button>
                      </div>

                     </>   
                    )
                })
            }
            </div>
        </div>
    )
}

export default page
