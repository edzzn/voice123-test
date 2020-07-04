import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit'>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
