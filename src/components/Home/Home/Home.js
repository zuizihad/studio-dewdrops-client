import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Client from '../Client/Client';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Promotion from '../Promotion/Promotion';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Promotion></Promotion>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default Home;