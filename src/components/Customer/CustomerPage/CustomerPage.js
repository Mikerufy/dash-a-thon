import React, { useEffect, useState } from 'react'
import { getProductForm } from '../../../API'
import Banner from '../Banner/Banner'
import CarouselCard from '../CarouselCard/CarouselCard'
import ListProducts from '../ListProducts/ListProducts'
import "./CustomerPage.css"
function CustomerPage() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchData= async ()=>{
         const fetchBody=await getProductForm()
        
         setProducts(fetchBody);
      
        }
        fetchData();        
    },[])
    return (<>
        <div style={{backgroundColor:'#ebefff'}}>
            <Banner/>
            <CarouselCard products={products}/>
            <ListProducts products={products}/>
        </div>
   </> )
}

export default CustomerPage
