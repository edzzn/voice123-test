import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Divider,
  Typography,
  IconButton,
  CardContent,
  Card,
  CardMedia,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: 10,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    profileImage: {
      minWidth: 100,
      width: 200,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    playButton: {
      marginLeft: 'auto',
    },
  })
);

function MediaControlCard() {
  const classes = useStyles();

  // TODO: Add link
  return (
    <Grid item md={6}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.profileImage}
          image='https://placekitten.com/g/200/300'
          title='voice actor name'
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              Actor Name
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              semper, diam vel hendrerit faucibus, eros velit cursus dui, id
              feugiat nunc lacus non tellus. Vivamus vitae arcu nisi.
            </Typography>
          </CardContent>
          <Divider />
          <div className={classes.controls}>
            <IconButton aria-label='play/pause'>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>

            <Typography variant='body2' color='textSecondary'>
              Audio name
            </Typography>
          </div>
        </div>
      </Card>
    </Grid>
  );
}

export default MediaControlCard;
