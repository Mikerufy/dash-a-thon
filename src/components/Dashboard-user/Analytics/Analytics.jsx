import React,{useState,useCallback,useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Line } from 'react-chartjs-2';
import MapComponent from './MapComponent';
import MapGL,{Marker,NavigationControl,GeolocateControl } from 'react-map-gl';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';    
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root_form:{
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Analytics() {
  const classes = useStyles();
  const [viewport, setViewport] = React.useState({
    latitude: 21.084488,
    longitude: 72.6430332,
    zoom: 8,

});
const [userLoc,setUserLoc]=useState([]);
const percentage = 68;
const [category, setCategory] = React.useState('');
const handleChange = (event) => {
  setCategory(event.target.value);
};
const [description, setDescription] = React.useState('');
const handleChangeDescp = (event) => {
  setDescription(event.target.value);
};
const geolocateControlStyle= {
  right: 15,
  top: 10
};

const geocoderContainerRef = useRef();
const mapRef = useRef();
const handleViewportChange = useCallback(
  (newViewport) => setViewport(newViewport),
  []
);

// if you are happy with Geocoder default settings, you can just use handleViewportChange directly
const handleGeocoderViewportChange = useCallback(
  (newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides
    });
  },
  [handleViewportChange]
);
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamF5bmFydXRvIiwiYSI6ImNrcGY3MDFybzA4emQydnFvaHA1emY1cXAifQ.sHf7OSLjvHC6caHHVXTgQw";

  return (<>
  <div>
  <Typography  variant="h4" color="textSecondary">
   Analytics
 </Typography>
  </div>

 <hr></hr>
  <div className={classes.root}>

  </div>
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <Paper className={classes.paper}>
          <div className={classes.root}>
      <Grid  style={{alignItems:'center',justifyContent:'center'}} container spacing={3}>

      <Grid item xs={12} sm={6}>
        {
          userLoc ?
          (
            <TextField value={userLoc[0]} id="standard-basic1" disabled />
          ):
          (
            <TextField id="standard-basic" label="Longitude" />
          )
        }
     
        </Grid>
        <Grid item xs={12} sm={6}>
        {
          userLoc ?
          (
            <TextField value={userLoc[1]} id="standard-basic2" disabled />
          ):
          (
            <TextField id="standard-basic" label="Latitude" />
          )
        }
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={10}>Food Products</MenuItem>
          <MenuItem value={20}>Clothes & Accessories</MenuItem>
          <MenuItem value={30}>Skin Care</MenuItem>
          <MenuItem value={40}>Services</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label2">Description</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          value={description}
          onChange={handleChangeDescp}
        >
          <MenuItem value={11}>Chinese</MenuItem>
          <MenuItem value={22}>Ethnicwear</MenuItem>
          <MenuItem value={33}>Soap</MenuItem>
          <MenuItem value={44}>Tutor</MenuItem>
        </Select>
      </FormControl>
        </Grid>

        <Grid item xs={4}>

        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',

            // Text size
            textSize: '12px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        </Grid>
        <Grid item xs={6}>
        <Button variant="outlined" color="secondary">
          Check success rate
        </Button>
          </Grid>
       
        </Grid>
        </div>
 

  
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{height:'100%'}} className={classes.paper}>
        
          {/* <ReactMapGL
          
                                      
                                      {...viewport}
                                      mapboxApiAccessToken ="pk.eyJ1IjoiamF5bmFydXRvIiwiYSI6ImNrcGY3MDFybzA4emQydnFvaHA1emY1cXAifQ.sHf7OSLjvHC6caHHVXTgQw"
                                      mapStyle="mapbox://styles/jaynaruto/ckpf7miyr0l2917vxppvlz8sd"
                                      width="100%"
                                      height="100%"
                                      onViewportChange={handleViewportChange}
                                      onDblClick={(coords)=>setUserLoc(coords.lngLat)}>
                                                  <div
                                                      style={{
                                                          position: "absolute",
                                                          top: 0,
                                                          left: 0,
                                                          padding: "10px"
                                                      }}
                                                      >
                                                         <GeolocateControl
                                                          style={geolocateControlStyle}
                                                          positionOptions={{enableHighAccuracy: true}}
                                                          trackUserLocation={true}
                                                          auto
                                                        />
                                                           <Geocoder
                                                              mapRef={mapRef}
                                                              containerRef={geocoderContainerRef}
                                                              onViewportChange={handleGeocoderViewportChange}
                                                              mapboxApiAccessToken='pk.eyJ1IjoiamF5bmFydXRvIiwiYSI6ImNrcGY3MDFybzA4emQydnFvaHA1emY1cXAifQ.sHf7OSLjvHC6caHHVXTgQw'
                                                              position="top-left"
                                                            />
                                                      <NavigationControl />
                                                      </div>
                                                      <Marker longitude={72.6430332} latitude={21.084488}>
                                                      <div style={{ color: "white" }}>You are here</div>
                                                      </Marker>
  
                                          </ReactMapGL> */}

       
                  <MapGL
                    ref={mapRef}
                    {...viewport}
                    width="100%"
                    mapStyle="mapbox://styles/jaynaruto/ckpf7miyr0l2917vxppvlz8sd"
                    height="100%"
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    onDblClick={(coords)=>setUserLoc(coords.lngLat)}
                  >
                    <div
                    ref={geocoderContainerRef}
                    style={{ position: "relative", top: 10, left:10, zIndex: 1 }}
                  />
                    <div
                                                      style={{
                                                          position: "absolute",
                                                          top: 0,
                                                          right: 20,
                                                          padding: "10px"
                                                      }}
                                                      >
                                                        <GeolocateControl
                                                          style={geolocateControlStyle}
                                                          positionOptions={{enableHighAccuracy: true}}
                                                          trackUserLocation={true}
                                                          auto
                                                        />
                                                           <Geocoder
                                                              mapRef={mapRef}
                                                              containerRef={geocoderContainerRef}
                                                              onViewportChange={handleGeocoderViewportChange}
                                                              mapboxApiAccessToken='pk.eyJ1IjoiamF5bmFydXRvIiwiYSI6ImNrcGY3MDFybzA4emQydnFvaHA1emY1cXAifQ.sHf7OSLjvHC6caHHVXTgQw'
                                                              position="top-left"
                                                            />
                                                      <NavigationControl />
                                                      </div>
                  </MapGL>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
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
 
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{height:'100%'}} className={classes.paper}>
   <Line
              
             
              data= {{
                labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                  datasets: [{
                    label: "First dataset",
                    data: [33, 53,2,85, 41, 44, 65],
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

          </Paper>
        </Grid>

      </Grid>
    </div>
 </> );
}