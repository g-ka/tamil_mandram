import React from 'react';
import { Outlet } from 'react-router-dom';
import Public_header from './component/Public_header';
import Footer from './component/Footer';
import Nav_bar from './component/Nav_bar';

const Layout = () => {
  return (
    <main>
      <Public_header />
      <Outlet />
      <Footer />
      <Nav_bar />
    </main>
  )
}

export default Layout