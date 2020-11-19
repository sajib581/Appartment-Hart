import React from 'react';
import { useHistory } from 'react-router-dom';
import './product.css'

const Product = (props) => {
    let history = useHistory();
    const { name, location, bedroom, bathroom, image, price, id } = props.data;

    const clickHandeler = (image,name,price) => {
        localStorage.setItem('imageLink',image)
        history.push(`/appartment`);
    }
    return (
        <div className="product my-3">
            <img src={image} alt="image" />
            <div className="ml-3 my-3">
                <h5>{name}</h5>
                <img className="smalll-img" src="https://i.ibb.co/fr4Gzt4/map-marker-alt-solid-1.png" alt="" />{location} <br />
                <div className="d-flex">
                    <img className="smalll-img" src="https://i.ibb.co/KbNtmhW/bed-1.png" alt="" />{bedroom} <br />
                    <img className="smalll-img ml-5" src="https://i.ibb.co/zbRn64p/bath-1.png" alt="" />{bathroom}
                </div>
                <div className="d-flex mt-3">
                    <h4>{price}</h4>
                    <button onClick={()=>clickHandeler(image,name,price)} className="view-btn ml-5">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;