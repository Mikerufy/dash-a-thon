import {  Typography,Grid,Card,IconButton,makeStyles,Box } from '@material-ui/core'
import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./IndividualCard.css"
import { Link } from 'react-router-dom';
function IndividualCard({products}) {


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
    const classes = useStyles();
    console.log(products)
    return (<>
              {
                products.map((prod)=>(
                  <Box sx={{ flexGrow: 1 , p:'2rem'}}>
                  <Grid container spacing={1}>
                <div className="label">  <h3>{prod.name}</h3> </div>
                    <Grid item xs={12} md={12}>
                    
                    <Grid container spacing={3}>
                       
                        {
                    prod.product.map((product)=>(<>
                 
                  <Grid item xs={3} md={3}>
                        <Card key={product._id} className={classes.root2}>
               
                              <img width="304px" height="200px" src={product[0].imgUrl} alt=""/>
                            
                            <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                  {product[0].productName}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                  {product[0].productType}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Rs.{product[0].price}
                                    <div style={{display:'flex',float:'right',position:'relative',left:20}}>
                                    <IconButton>
                                        <AddShoppingCartIcon style={{fill : 'black'}}/>
                                    </IconButton>
                                </div>
                                  </Typography>
                                </CardContent>
                        
                          </Card>
                          </Grid>

                    </>  ))
                    }

                     
                    </Grid>
                   
                    
    
                   
                    </Grid>
                  </Grid>
                  </Box>
                ))}











                    <Link to="/dashboard/customer/searched-products">
                    <h5 style={{textAlign:'center'}}>Search the products you want.</h5>
                    </Link>
         
           
      

 </>)
}

export default IndividualCard
