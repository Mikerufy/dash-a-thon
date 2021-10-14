import { Card, CardContent,CardActionArea,CardMedia,Grid,Typography,IconButton,TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {makeStyles } from '@material-ui/core'
import "./SearchedProducts.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useLocation } from 'react-router';
import { addItemToCart, getProductForm } from '../../../../API';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../../../redux/cartSlice';


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

function SearchedProducts({products}) {
  const dispatch = useDispatch()
  const [theArray, setTheArray] = useState([]);

  const handleAddToCart=(product)=>{
      //  await addItemToCart({
      //   productName:product.productName,
      //   productType:product.productType,
      //   price:product.price,
      //   imgUrl:product.imgUrl
      //    })
   
      dispatch(fetchCart({
        cart:
        {
            productName:product.productName,
            productType:product.productType,
            price:product.price,
            imgUrl:product.imgUrl
        }
    }))
    
      
  }

    const [search, setSearch] = useState();


    const classes = useStyles();
    const filtered = products.filter((prod) => {
      return prod.productName.toLowerCase().indexOf(search) !== -1;
    });
    return (<>
        <div>
            <Card style ={{padding:'3rem'}}>
                <CardContent>
                    
                <Grid style={{padding:20}}  container  spacing={3}>
                  <div  className="searchbox">
                  <div style={{color:'rgb(131,0,0)'}}>
                    <SearchIcon />
                    </div>

                    <div>
                    <TextField  
                    onChange={(e) => setSearch(e.target.value)}
                     size="small" id="outlined-search" placeholder="Search items" />       
  
                    </div>
                    </div>
                  
                 <Grid item xs={12} >

    <Grid container spacing={3}>
          {
              filtered.map((product)=>(
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
                  <AddShoppingCartIcon 
                  onClick={()=>{handleAddToCart(product)}}
                  />
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
