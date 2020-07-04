import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, IconButton, InputBase, Grid } from '@material-ui/core';
import MediaControlCard from './componets/VoiceArtistCard';
// import VoiceArtistsIcon from '@material-ui/icons/VoiceArtists';

export interface VoiceArtistsProps {
  // placeholder: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
  })
);

function VoiceArtists(props: VoiceArtistsProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
      </Grid>
    </div>
  );
}

export default VoiceArtists;
