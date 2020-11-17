import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className="headerMain">
            <div className="header-function">
                <h2>FIND YOUR HOUSE RENT</h2>
                <div class="row">
                    <div class="col-md-8">
                        <input type="text" className="form-control mr-5" placeholder="Search ..." id="findHouse"></input>
                    </div>
                    <div class="col-md-4">
                        <button className="login-btn">Find Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;

