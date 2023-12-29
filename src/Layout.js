import React from 'react';
import { Outlet } from 'react-router-dom';
import Public_header from './component/Public_header';
import Footer from './component/Footer';
import Nav_bar from './component/Nav_bar';
import useData from './hooks/useData';

const Layout = () => {

  const { set_is_open } = useData();

  return (
    <main
      onClick={e => {
        const text = e.target.className.baseVal;   
        if(!text?.includes('head_menu_icon')) set_is_open(false);  
      }}
    >
      <Public_header />
      <Outlet />
      <Nav_bar />
      <Footer />      
    </main>
  )
}

export default Layout