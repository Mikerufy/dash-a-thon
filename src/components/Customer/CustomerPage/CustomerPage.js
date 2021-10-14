import React, { useEffect, useState } from 'react'
import { getProductForm } from '../../../API'
import Banner from '../Banner/Banner'
import CarouselCard from '../CarouselCard/CarouselCard'
import ListProducts from '../ListProducts/ListProducts'
import "./CustomerPage.css"
function CustomerPage({products}) {

    return (<>
        <div style={{backgroundColor:'#ebefff'}}>
            <Banner/>
           
            <CarouselCard products={products}/>
            <ListProducts products={products}/>
            
        </div>
   </> )
}

export default CustomerPage
