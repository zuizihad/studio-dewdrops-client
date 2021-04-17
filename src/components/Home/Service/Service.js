import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    return (
        <div className="col-md-4">
            <Link to={`/service/${service._id}`}>
                <div className="card mb-4 ">
                    <div className="card-body service-card">
                        <img src={service.imageURL} alt="" width="100" />
                        <h5 className="card-title">{service.serviceName}</h5>
                        <p>{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;