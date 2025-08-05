// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import CategoryBar from './CategoryBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Outlet />
    </>
  );
};

export default Layout;
