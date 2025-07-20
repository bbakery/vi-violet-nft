import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Gallery />
            <Footer />
        </div>
    );
};

export default HomePage;