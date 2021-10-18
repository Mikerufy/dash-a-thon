import React from 'react'
import banner from "./vyaapaar.com.png"
import "./Banner.css"
import {Box,Button,Grid} from '@mui/material';
import discount from "./discount.svg"
function Banner() {
    return (<>
           {/* <img 
      style={{width:'100%'}}
        src="https://wallpaperaccess.com/full/2593108.png"
        /> */}
            {/* <img className="banner__img" src={banner} alt=""/> */}
            <Box  sx={{ flexGrow: 1 }}>
      <Grid container  flexDirection="row-reverse" alignItems="center" spacing={2}>

        <Grid style={{textAlign:'left'}} item xs={12} md={5}>
            <img src={discount} alt=""/>
        </Grid>
        
        <Grid style={{paddingLeft:'10rem'}}  item xs={12} md={6}>
            
            <Grid  item xs={12} md={5}>
            <Grid container alignItems="center" spacing={2}>
            <Grid  item xs={12} md={10}>
            <div  className="introduction__text">
                    <h1 style={{color:'#000'}}>
                    Lets Vyaapaar!
                    </h1>
            </div>
            </Grid>
            <Grid style={{textAlign:'left'}} item xs={12} md={10}>
            <p>
                    SOME DESCRIPTION
                    </p>
            </Grid>
    
            <Grid style={{textAlign:'left'}} item xs={12} md={10}>
            <div   className="introduction__btns">
    
                {/* <Button
                     style={{
                        color:'#ffffff',
                        backgroundColor:'rgb(131,0,0)',
                        borderRadius:'40px',
                        padding:'1rem',
                        width: 180,
                        height: 50,
                
                    }}
                     variant=" contained" size="large">VIEW OFFERS</Button> */}
    
                
                </div>
            </Grid>
        </Grid>
    
    
    
        
            </Grid> 
            </Grid>
            <Grid item xs={0} md={1}>
            </Grid>
        </Grid>
        </Box>
    </>)
}

export default Banner
