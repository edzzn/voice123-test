import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import classes from '*.module.css';

export interface EmptySearchResultProps {
  searchTerm?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    // width: '100%',
    margin: 50,
  },
}));

function EmptySearchResult(props: EmptySearchResultProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h6' color='inherit'>
        Sorry, no results were found for <b>{props.searchTerm}</b>. Please try
        with different search terms.
      </Typography>
    </div>
  );
}

export default EmptySearchResult;
