import React from 'react';
import { Outlet } from 'react-router-dom';
import Public_header from './component/Public_header';
import Footer from './component/Footer';

const Layout = () => {
  return (
    <main>
      <Public_header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
