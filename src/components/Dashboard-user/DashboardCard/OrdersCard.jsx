import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./OrdersCard.css";
import AlarmIcon from '@material-ui/icons/Alarm';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Grid, IconButton,Paper } from '@material-ui/core';
import {  Line } from "react-chartjs-2"
import LoopIcon from '@material-ui/icons/Loop';
import RecentOrder from '../RecentOrders/RecentOrder';
import BCO from "../BreadCrumbOrder/BCO"
import TableOrder from '../TableOrder/TableOrder';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function OrdersCard() {
  const classes = useStyles();
  return (<>
  <div className="flex_row_container">
  <div>
  <Typography  variant="h5" color="textSecondary">
   Dashboard
 </Typography>
  </div>
  <div className="bco">
  <BCO/>
  </div>
  </div>


 
  <hr></hr>

  {/* ---------------------------------------------------------------------------------- */}
  <Grid  container  spacing={3}>
    
  <Grid justifyContent="space-between" item xs={6} spacing={3}>
  <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <div >
         <IconButton size="medium" className="order_icon">
         <AlarmIcon  style={{fontSize:30}}/>
         </IconButton>

       </div>
       <div className="order_type">
       Pending Orders
       </div>
       <div className="number_order">
         10
       </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <div >
         <IconButton className="order_icon">
         <ShoppingCartOutlinedIcon style={{fontSize:30}}/>
         </IconButton>

       </div>
       <div className="order_type">
       Completed Orders
       </div>
       <div className="number_order">
         10
       </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            
          <div >
         <IconButton size="medium" className="order_icon">
         <LoopIcon  style={{fontSize:30}}/>
         </IconButton>

       </div>
       <div className="order_type">
       Refund Requests
       </div>
       <div className="number_order">
         10
       </div>
          </Paper>
        </Grid>
      </Grid>


      
   
<div>
<Card>
<div className={classes.paper}>
<Line
    
   style={{height:295}}
    data= {{
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [{
          label: "First dataset",
          data: [33, 53, 85, 41, 44, 65,2],
          fill: false,
          backgroundColor: "rgb(255, 255, 254)",
          borderColor: "rgb(131, 0, 0)",
         
        }]}}
      
        
      
        options={ {
          maintainAspectRatio:false,
          responsive:true,
          plugins: {
            legend:{
              display:false
            },
            title:{
              display:true,
              text:"Sales"
            },
          },
          
         scales:{
           x:{
            display:true,
            title:{
              display:true,
            
            },
            grid:{
              display:false,
            
            
            }
           },
          y: {
          display:true,
          title:{
            display:true,
          
          },
            grid:{
              display:false,
              
            
            
            }
        }
         } 
        }
        }
        />
        </div>
</Card>


</div>


        </Grid>
        <Grid item xs={6} sm={6}>
          <div className={classes.paper}>
          <Card className="recent_orders">
     <CardContent>
     {/* <Typography  variant="h5" color="textSecondary">
        Recent Orders
      </Typography> */}
       {/* <RecentOrder/> */}
       {

         <Card>
           <Grid style ={{maxHeight:400,overflow:'auto'}} item xs={12}>
           <RecentOrder/>
          </Grid>
             
       
         </Card>
          

   
       }
     </CardContent>
    </Card>
          </div>
        </Grid>
        <Grid item xs={12} >
        <TableOrder/>
        </Grid>
        </Grid>

  </>);
}
