import { makeStyles,Grid} from '@material-ui/core'
import React from 'react'

import "./ListProducts.css"

import IndividualCard from './IndividualCard/IndividualCard';


function ListProducts({products}) {
    


    return (<>
        <div className="listofproducts">
    <IndividualCard products={products}/>  
        </div>
    </>)
}

export default ListProducts
