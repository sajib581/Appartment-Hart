import React from 'react';
import HeaderMain from '../Home/HeaderMain/HeaderMain';
import Header from '../Shared/Header/Header';
import './Appartment.css'

const Appartment = () => {
    let imageLink = localStorage.getItem('imageLink')
    console.log(imageLink);
    // localStorage.removeItem('imageLink')
    return (
        <div>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-8" >
                        <div className="mb-4">
                            <img className="big-img" src={imageLink} alt="" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <img className="small-img" src="https://i.ibb.co/1MJhDBP/Rectangle-407.png" alt="" />
                            <img className="small-img" src="https://i.ibb.co/vs4Xv0C/Rectangle-408.png" alt="" />
                            <img className="small-img" src="https://i.ibb.co/R6F1Y6f/Rectangle-409.png" alt="" />
                            <img className="small-img" src="https://i.ibb.co/Kz3111b/Rectangle-410.png" alt="" />
                        </div>

                        <div className="my-3">
                            <div className="d-flex justify-content-between">
                                <h4>Family Apartment Three</h4>
                                <h4>$256</h4>
                            </div>
                            <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                        </div>
                        {/* details */}
                        <div className="my-3">
                            <h4>Price Details-</h4>
                            <p>
                                Rent/Month: $550 (negotiable)
                                Service Charge : 8,000/= Tk per month, subject to change
                                Security Deposit : 3 month’s rent
                                Flat Release Policy : 3 months earlier notice required
                            </p>
                        </div>
                        {/* Property Details- */}
                        <div className="my-3">
                            <h4>Property Details-</h4>
                            <p>
                                <strong>Address & Area :</strong> Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. <br/>
                                <strong>Flat Size :</strong> 3000 Sq Feet. <br/> 
                                <strong>Floor : </strong>  A5 (5th Floor) (6 storied Building ) (South Facing Unit)<br/>
                                <strong>Room Category : </strong> 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br/>
                                <strong>Facilities :</strong> 1 Modern Lift, All Modern Amenities & Semi Furnished.<br/>
                                <strong>Additional Facilities :</strong> a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                            </p>
                        </div>
                    </div>
                    {/* Form  */}
                    <div className="col-md-3" >
                        <div className="p-3" style={{ backgroundColor: '#F4F4F4' }}>
                            <input className="form-control my-3" placeholder="Name" type="text" name="" id="" />
                            <input className="form-control my-3" placeholder="Number" type="text" name="" id="" />
                            <input className="form-control my-3" placeholder="Email" type="email" name="" id="" />
                            <textarea className="form-control my-3" placeholder="Message" name="" id="" cols="30" rows="5"></textarea>
                            <button className="login-btn">Request Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appartment;