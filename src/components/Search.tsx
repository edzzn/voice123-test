import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export interface SearchProps {
  placeholder: string;
  value?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 600,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

function Search(props: SearchProps) {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        value={props.value}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
