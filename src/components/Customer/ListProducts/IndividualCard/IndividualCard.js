import {  Typography,Grid,Card,IconButton,makeStyles } from '@material-ui/core'
import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
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
    return (<>

        <div>
            {
                ["Cake","Waffle","Pie","Tart","Donut"].map((type)=>(<>
                <div style={{marginTop:'2rem'}}>

                
                    <Link to={{
                        pathname:'/dashboard/customer/searched-products', 
                       
                     }} className="individualcard__header">{type}
                    </Link>
                    <Card className="individualcard__card">
                   
                      <Grid style={{padding:20}}  container  spacing={3}>
                    <Grid item xs={12} >
            <Grid container spacing={3}>
                    {
                                
                                products.map((product)=>
                             product.productType===type ?
                             (
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
                             ):null
                                    
                    
                           
                               
                                )
                                
                            
                   }
                      </Grid>
            </Grid></Grid>
                    </Card></div>
                    </>  ))
                    }  
                    </div>
           <h1 style={{textAlign:'center'}}>Much more...</h1>
           
      

 </>)
}

export default IndividualCard
