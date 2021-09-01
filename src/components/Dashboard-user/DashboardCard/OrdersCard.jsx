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
import { IconButton } from '@material-ui/core';
import {  Line } from "react-chartjs-2"
import LoopIcon from '@material-ui/icons/Loop';
import RecentOrder from '../RecentOrders/RecentOrder';
import BCO from "../BreadCrumbOrder/BCO"
export default function OrdersCard() {
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
  <div className="whole_card">


  <div className="left_card">
  <div  className="left_card_orders">
  <div>
  <Card className="pending_orders card_padding" style={{textAlign:'center'}}>
  <CardContent>
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

       </CardContent>
    </Card>

  </div>
  <div>
  <Card className="completed_orders card_padding" style={{textAlign:'center'}}>
  <CardContent>

     <div >
         <IconButton className="order_icon">
         <ShoppingCartOutlinedIcon style={{fontSize:30}}/>
         </IconButton>

       </div>
       <div className="order_type">
       Pending Orders
       </div>
       <div className="number_order">
         10
       </div>
        
  </CardContent>
    </Card>
  </div>
  <div>
  <Card className="refund_req card_padding" style={{textAlign:'center'}}>
  <CardContent>
     <div >
         <IconButton size="medium" className="order_icon">
         <LoopIcon  style={{fontSize:30}}/>
         </IconButton>

       </div>
       <div className="order_type">
       Pending Orders
       </div>
       <div className="number_order">
         10
       </div>
       </CardContent>
    </Card>
  </div>
</div>
  <div className="left_card_graph">
   <Card>
   <Line
              
             
              data= {{
                labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                  datasets: [{
                    label: "First dataset",
                    data: [33, 53, 85, 41, 44, 65,2],
                    fill: false,
                    backgroundColor: "rgb(255, 255, 254)",
                    borderColor: "rgb(131, 0, 0)",
                   
                  }]}}
                  height={360}
                  
                
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
    </Card>
  </div>

  </div>
{/* --------------------------------- */}
  <div className="right_card" > 
  <Card className="recent_orders">
     <CardContent>
     {/* <Typography  variant="h5" color="textSecondary">
        Recent Orders
      </Typography> */}
       {/* <RecentOrder/> */}
       {
       [1,2,3,4,5,6].map((order)=>(
         <>
         <Card>
         <RecentOrder/>
         </Card>
          

         </>
       ))
       }
     </CardContent>
    </Card>
  </div>
  </div>
  </>);
}
