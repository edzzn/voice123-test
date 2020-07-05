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
  Link,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { VoiceArtist } from '..';

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
      minWidth: 200,
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
    link: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
  })
);

export interface MediaControlCardProps {
  voiceArtist: VoiceArtist;
}

function truncateText(text: string, length: number): string {
  if (text.length > length) return text.substring(0, length) + '...';
  else return text;
}

function MediaControlCard(props: MediaControlCardProps) {
  const classes = useStyles();

  return (
    <Grid item md={6}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.profileImage}
          image={props.voiceArtist.image}
          title={props.voiceArtist.name}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              <a
                href={`https://voice123.com/${props.voiceArtist.username}`}
                className={classes.link}
                target='_blank'
              >
                {props.voiceArtist.name}
              </a>
            </Typography>

            <Typography variant='body1' color='textSecondary'>
              {truncateText(props.voiceArtist.summary, 200)}
            </Typography>
          </CardContent>
          <Divider />
          <div className={classes.controls}>
            <IconButton aria-label='play/pause'>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>

            <Typography variant='body2' color='textSecondary'>
              {props.voiceArtist.relevantSample.name}
            </Typography>
          </div>
        </div>
      </Card>
    </Grid>
  );
}

export default MediaControlCard;
