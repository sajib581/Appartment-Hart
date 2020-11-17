import React from 'react';
import { fakeData } from '../../../FakeData/fakeData';
import Product from '../Product/Product';
import './HouseRent.css'

const HouseRent = () => {
    
    return (
        <div className="house-rent ">
            <div className="container py-5">
                <p className="text-center">House Rent</p>
            <h2 style={{textAlign: 'center'}}>Discover the latest Rent <br/> Avalable Today</h2>
            <div className="row justify-content-between">
            {
                fakeData.map(data => <Product key = {data.id} data = {data}></Product>)
            }
            </div>
            </div>
        </div>
    );
};

export default HouseRent;