import React from 'react';
import './Testimonial.css';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-body testimonial-card p-3">
                    <div className="d-flex justify-content-center align-items-center my-3 author">
                        <img src={testimonial.authorPhoto} alt="" />
                        <div className="mb-3 ms-5">
                            <h5 className="card-title">{testimonial.author}</h5>
                            <h6>{testimonial.designation}</h6>
                        </div>
                    </div>
                    <p>{testimonial.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;