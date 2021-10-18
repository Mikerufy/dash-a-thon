import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Appbar.css"
import list from "./list.png"
import close from "./close.png"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@material-ui/core'
function Appbar() {

  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
    return (<>
    <div>
     <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <a href="home" className="nav-logo">
            VYAAPAAR
            <i className="fa fa-code"></i>
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#map"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Roadmap
              </a>
            </li>
            {/* <li className="nav-item">
              < a href="#gallery"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
              <IconButton>
                  <ShoppingBasketIcon/>
               </IconButton>
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/login"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
              Login
              </a>
            </li>
            <li className="nav-item">
              <a href="#footer"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
               <IconButton>
                  <LogoutIcon/>
               </IconButton>
              </a>
            </li>


        </ul>
        <div onClick={handleClick}>
            <img src={click ? close : list} style={{color:'white'}} className={click ? "nav-icon2" : "nav-icon"}></img >
            
          </div> 
        </div>
      </nav>
    </ div>
   </> )
}

export default Appbar
