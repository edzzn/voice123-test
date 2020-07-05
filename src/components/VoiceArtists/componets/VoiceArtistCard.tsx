import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Divider,
  Typography,
  CardContent,
  Card,
  CardMedia,
} from '@material-ui/core';
import { VoiceArtist } from '..';
import AudioPlayer from 'material-ui-audio-player';
import HighlightedText from './highlighedText';

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
      minHeight: 60,
      marginTop: 12,
      marginLeft: 15,
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
    textHighlight: {
      backgroundColor: 'yellow',
    },
  })
);

export interface VoiceArtistCardProps {
  voiceArtist: VoiceArtist;
  searchTerm?: string;
}

function VoiceArtistCard(props: VoiceArtistCardProps) {
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
            <HighlightedText
              text={props.voiceArtist.summary}
              searchTerm={props.searchTerm ? props.searchTerm : ''}
            />
          </CardContent>
          <Divider />
          <div className={classes.controls}>
            <AudioPlayer
              elevation={0}
              variation='primary'
              src={props.voiceArtist.relevantSample.file}
            />
          </div>
        </div>
      </Card>
    </Grid>
  );
}

export default VoiceArtistCard;
