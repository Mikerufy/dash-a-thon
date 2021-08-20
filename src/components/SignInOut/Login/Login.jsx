import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import loginsvg from "../../../images/login-animate.svg" 
import "./Login.css"
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 275,
      display:'flex',
      flexDirection:'row-reverse',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));
  
export default function Login() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className="login_card">
            
             <Card className={classes.root} variant="outlined">
                 <div className="card_detail">
                 <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Logo here
        </Typography>
        <Typography variant="h6" component="h2">
          Sign in to your account
        </Typography>

        <TextField size="small" required id="standard-required"  variant="outlined" defaultValue="Email" />
        <TextField size="small" disabled id="standard-disabled"  variant="outlined" defaultValue="Password" />



      </CardContent>
      <CardActions>
        <Button  component={Link} to="/sign-in-page" size="small">Sign in</Button>
        <Button component={Link} to="/sign-up-page" size="small">Sign up</Button>
        <Button component={Link} to="/" size="small">let's go</Button>
      </CardActions>
                 </div>
                 <div>
                     <img className="card_img" src="https://wallpaperbat.com/img/464721-free-download-light-yellow-wallpaper-7195x4297-for-your-desktop-mobile-tablet-explore-light-yellow-background-light-yellow-background-light-yellow-wallpaper-light-blue-and-yellow-wallpaper.jpg"/>
                     <img   className="card_img_svg" src={loginsvg}></img>
                 </div>

    </Card>
        </div>
    )
}
