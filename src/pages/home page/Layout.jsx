import React from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Container from '../../Container';

export default function Layout() {
  return (
    <div>
      <Header />
      <Container className='grid grid-cols-12 gap-0'>
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
