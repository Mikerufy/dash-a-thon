import React from 'react'
import "./PickASide.css"
import svg from  "./option.svg"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import disc from "./discord (8).png"
import instagram from "./instagram (7).png"
import {Box,Grid} from '@mui/material';
import Roadmap from './Roadmap/Roadmap';





function PickASide({user}) {
    return (<>
  
        <div>
        <Box  sx={{ flexGrow: 1,padding:'5rem' }}>
      <Grid container  flexDirection="row-reverse" alignItems="center" spacing={2}>
        <Grid style={{textAlign:'right'}}  item xs={12} md={3}>
        <div className="side__option">
                    <div>
                    <h2>Buyer</h2>
                    <hr></hr>
                    </div>
                    <div>
                        <p>
                            BLAH BLAH BLAH
                        </p>
                    </div>
                    <div>
                      
                        <Button component={Link} to={{
                            pathname:'/sign-up-page',
                            state: { person: "buyer" }
                            }} variant="contained" >Continue</Button>
              
            
                    </div>
                  
                </div>
        </Grid>
        <Grid style={{textAlign:'right'}}  item xs={12} md={6}>
        <div>
                <img width="100%" height="100%"  src={svg} alt=""/>
            </div>
          
        </Grid>
        <Grid style={{textAlign:'right'}}  item xs={12} md={3}>
        <div className="side__option">
            <div>
                    <h2>Seller</h2>
                    <hr></hr>
                    </div>
                    <div>
                        <p>
                            BLAH BLAH BLAH
                        </p>
                    </div>
                    <div>
                   
                    <Button component={Link} to={{
                            pathname:'/sign-up-page',
                            state: { person: "seller" }
                            }} variant="contained" >Continue</Button>
             
                    </div>
            </div>
        </Grid>
         <Grid item xs={12} md={12}>
         <h2 className="about">Roadmap</h2>
         <Roadmap/>
        </Grid>
        <Grid item xs={12} md={12}>
            
        <div>
            <h2 className="about">About Us</h2>
            <Grid style={{textAlign:'center',color:'white'}} container justifyContent="space-between"  alignItems="center" spacing={2}>
            <Grid style={{textAlign:'center'}}  item xs={12} md={4}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid style={{textAlign:'center'}} container justifyContent="space-between"  alignItems="center" spacing={2}>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img width="60%" height="60%" style={{borderRadius:'50%'}} src='https://pbs.twimg.com/profile_images/795980094699347972/_jVxLC90.jpg' alt=""/>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <h1>BAPAT</h1>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                   <h2> CEO</h2>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img src={disc} alt=""/> &nbsp;  <img src={instagram} alt=""/>
                </Grid>
                </Grid>
               
                </Box>


        </Grid>

        <Grid style={{textAlign:'center'}}  item xs={12} md={4}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid style={{textAlign:'center'}} container justifyContent="space-between"  alignItems="center" spacing={2}>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img width="60%" height="60%" style={{borderRadius:'50%'}} src='https://pbs.twimg.com/profile_images/795980094699347972/_jVxLC90.jpg' alt=""/>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <h1>ISHA</h1>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                   <h2> CEO</h2>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img src={disc} alt=""/> &nbsp;  <img src={instagram} alt=""/>
                </Grid>
                </Grid>
               
                </Box>


        </Grid>

        <Grid style={{textAlign:'center'}}  item xs={12} md={4}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid style={{textAlign:'center'}} container justifyContent="space-between"  alignItems="center" spacing={2}>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img width="60%" height="60%" style={{borderRadius:'50%'}} src='https://pbs.twimg.com/profile_images/795980094699347972/_jVxLC90.jpg' alt=""/>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <h1>JAY</h1>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                   <h2> CEO</h2>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img src={disc} alt=""/> &nbsp;  <img src={instagram} alt=""/>
                </Grid>
                </Grid>
               
                </Box>


        </Grid>
        </Grid>
        </div>
        </Grid>


        </Grid>
      </Box>


        </div>


        
    </>)
}

export default PickASide
