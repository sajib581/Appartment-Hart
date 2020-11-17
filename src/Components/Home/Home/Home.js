import React from 'react';
import Header from '../../Shared/Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import HouseRent from '../HouseRent/HouseRent';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <HouseRent></HouseRent>
            <Services></Services>
        </div>
    );
};

export default Home;