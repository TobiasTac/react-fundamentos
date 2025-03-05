import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { BrowserRouter, Link } from 'react-router-dom';

import Routes from '../../Routes';

import { Nav } from './styles';

export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav>
          <Link to="/"> Home </Link>
          <Link to="/posts"> Posts </Link>
          <Link to="/posts/:id"> Post </Link>
        </Nav>
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}