import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner .jpg'

const Banner = () => {
    return (
        <main>
            <div class="banner row">
                <div class="col-md-6 banner-info">
                    <h4 style={{ color: 'goldenrod' }}>ULTIMATE SERVICES</h4>
                    <h1 style={{ color: 'gold' }}>Complete Studio <br />Setup Here</h1>
                    <a href="#" class="shop-btn">SHOP NOW</a>
                </div>
                <div class="col-md-6">
                    <img src={bannerImg} alt="banner" />
                </div>
            </div>
        </main>
    );
};

export default Banner;