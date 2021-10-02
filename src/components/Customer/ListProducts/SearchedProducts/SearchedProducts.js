import { Card, CardContent,CardActionArea,CardMedia,Grid,Typography,IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {makeStyles } from '@material-ui/core'
import "./SearchedProducts.css"
import DeleteIcon from '@material-ui/icons/Delete';
import { useLocation } from 'react-router';
import { getProductForm } from '../../../../API';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    root2:{
        maxWidth: 345,
    },
    media: {
        maxHeight: 140,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  
  }));

function SearchedProducts() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchData= async ()=>{
         const fetchBody=await getProductForm()
        
         setProducts(fetchBody);
      
        }
    fetchData();        
    },[])
    const classes = useStyles();
    
    return (<>
        <div>
            <Card style ={{padding:'3rem'}}>
                <CardContent>
                    <h1>Search box</h1>
                <Grid style={{padding:20}}  container  spacing={3}>
    <Grid item xs={12} >
    <Grid container spacing={3}>
          {
              products.map((product)=>(
                  <>
                  
  
          <Grid  item xs={3}>
          <Card key={product._id} className={classes.root2}>
        <CardActionArea>
          <CardMedia
          component="img"
            className={classes.media}
            image={product.imgUrl}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {product.productName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {product.productType}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rs.{product.price}
              <div style={{display:'flex',float:'right',position:'relative',left:20}}>
              <IconButton>
                  <DeleteIcon/>
              </IconButton>
          </div>
            </Typography>
          </CardContent>
  
        </CardActionArea>
      </Card>               
  </Grid>
                  </>
              ))
          }
    </Grid>
    </Grid>
          
  
          </Grid>
                </CardContent>
            </Card>
        </div>
   </> )
}

export default SearchedProducts
