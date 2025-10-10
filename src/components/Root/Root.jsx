import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const Root = () => {
  
  return (
    
    <div>
      <Helmet>
          <title>Home | Gadget Heaven</title>
          <meta name="description" content="Explore the new edge-cutting technologies" />
          <link rel="canonical" href="https://gadgetheavensa8.netlify.app/" />
        </Helmet>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
      
    </div>
  );
};

export default Root;