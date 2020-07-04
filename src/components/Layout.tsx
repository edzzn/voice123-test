import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

export interface LayoutProps {
  children: any;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 0),
  },
}));

function Layout(props: LayoutProps) {
  const classes = useStyles();
  return (
    <>
      <Header title='Voice123 - test' />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container alignItems='center' direction='column'>
          {props.children}
        </Grid>
      </Container>
      <Footer title='Voice123-test' />
    </>
  );
}

export default Layout;
