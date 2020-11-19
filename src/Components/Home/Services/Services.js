import React from 'react';
import { serviceFakeData } from '../../../FakeData/fakeData';
import ServiceData from '../ServiceData/ServiceData';

const Services = () => {

    return (
        <div className="house-rent pb-3">
            <div className="container">
                <p className="text-center">Services</p>
                <h2 style={{ textAlign: 'center' }}>We're an agency tailored to all <br />
            clients' needs that always delivers</h2>
                <div className="row my-5">
                    {
                        serviceFakeData.map(data => <ServiceData key={data.id}data={data}></ServiceData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;