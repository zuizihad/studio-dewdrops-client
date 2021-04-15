import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = ({ service }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 ">
                <div className="card-body service-card">
                    <FontAwesomeIcon className="icon" icon={service.icon} />
                    <h5 className="card-title">{service.title}</h5>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;