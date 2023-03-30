import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Nav from '../shared/Nav';

const Main = () => {
    return (
        <section>
            <Nav />
            <Outlet />
            <Footer />
        </section>
    );
};

export default Main;