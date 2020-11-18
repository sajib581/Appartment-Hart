import React from 'react';
import './ServiceData.css'

const ServiceData = (props) => {
    const { name, image, description, id } = props.data;
    return (
        <div className="service-data px-5 text-center">
            <img className="my-3" src={image} alt="image" />
            <h5>{name}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ServiceData;