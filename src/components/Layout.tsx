import React from 'react';

import { Container } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

export interface LayoutProps {
  children: any;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Header title='Voice123 - test' />
      <Container maxWidth='lg'>{props.children}</Container>
      <Footer title='Voice123-test' />
    </>
  );
}

export default Layout;
