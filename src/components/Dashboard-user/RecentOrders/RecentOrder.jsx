import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { CardActionArea } from '@material-ui/core';
import { ImportantDevices } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function RecentOrder() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>

        <CardMedia
        className={classes.cover}
        component="img"
        image="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2021/04/pick-and-mix-chocolate-and-sweet-cake-scaled-1.jpg"
        title="Live from space album cover"
      />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
          <p>
              DESCRIPTION
          </p>
        </CardContent>
      </div>
   

    </Card>

  );
}