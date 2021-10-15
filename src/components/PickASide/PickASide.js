import React from 'react'
import "./PickASide.css"
import svg from  "./option.svg"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';






function PickASide() {
    return (<>
        <div>


            <div className="option">
      

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

                <div>
                <img width="500px" height="500px"  src={svg} alt=""/>
            </div>
          
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
         
            </div>

        </div>
        <div style={{marginTop:'6rem'}}>
            <h2 className="about">About Us</h2>
            ISHA.........................BAPAT........................JAY
        </div>

        
    </>)
}

export default PickASide
