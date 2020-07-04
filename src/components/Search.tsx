import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Paper, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ENTER_KEY } from '../common/constants';

export interface SearchProps {
  classes: any;
  placeholder: string;
  onSearchClicked: (searchTerm: string) => void;
}

export interface SearchState {
  searchTerm: string;
}

const useStyles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
    marginBottom: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
};

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  onSearchTermUpdate = (value: string) => {
    this.setState({
      searchTerm: value,
    });
  };

  keyPress = (e: any) => {
    if (e.keyCode === ENTER_KEY) {
      this.props.onSearchClicked(e.target.value);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder={this.props.placeholder}
          value={this.state.searchTerm}
          onChange={(e) => this.onSearchTermUpdate(e.target.value)}
          onKeyDown={this.keyPress}
        />
        <IconButton
          className={classes.iconButton}
          aria-label='search'
          onClick={() => this.props.onSearchClicked(this.state.searchTerm)}
          onSubmit={() => {}}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

// export default Search;

export default withStyles(useStyles)(Search);
