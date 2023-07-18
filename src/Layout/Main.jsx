import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <>
          <Header></Header>
          <div className='m-4 p-4'>
            <Outlet></Outlet> 
          </div> 
          <Footer></Footer>
        </>
    );
};

export default Main;