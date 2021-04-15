import React from 'react';
import './Client.css';
import apple from '../../../images/apple-logo.png'
import google from '../../../images/google.png'
import tesla from '../../../images/tesla.png'
import microsoft from '../../../images/microsoft.png'

const Client = () => {
    return (
        <section className="my-5">
            <h1 className="text-center text-secondary py-3">Our valuable client</h1>
            <div className="d-flex justify-content-center">
                <div className="row w-50">
                    <div className="col-md-3 my-3">
                        <img src={google} alt="" width="100" />
                    </div>
                    <div className="col-md-3 my-3">
                        <img src={apple} alt="" width="100" />
                    </div>
                    <div className="col-md-3 my-3">
                        <img src={tesla} alt="" width="100" />
                    </div>
                    <div className="col-md-3 my-3">
                        <img src={microsoft} alt="" width="100" />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Client;