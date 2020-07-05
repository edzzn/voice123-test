import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import VoiceArtistCard from './componets/VoiceArtistCard';

export interface VoiceArtistSample {
  name: string;
  file: string;
}

export interface VoiceArtist {
  id: string;
  name: string;
  username: string;
  image: string;
  headline: string;
  summary: string;
  description: string;
  additionalDetails: string;
  relevantSample: VoiceArtistSample;
}

export interface VoiceArtistsProps {
  searchTerm?: string;
  voiceArtists: VoiceArtist[];
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

  const renderVoiceArtists = () => {
    return props.voiceArtists.map((voiceArtist) => (
      <VoiceArtistCard
        voiceArtist={voiceArtist}
        searchTerm={props.searchTerm}
      />
    ));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {renderVoiceArtists()}
      </Grid>
    </div>
  );
}

export default VoiceArtists;
