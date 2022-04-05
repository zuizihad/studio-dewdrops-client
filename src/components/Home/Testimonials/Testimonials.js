import React, { useEffect, useState } from 'react';
import bill from '../../../images/billg.jpg';
import steave from '../../../images/stevejobs.jpg';
import elon from '../../../images/mask.jpg';
import shundar from '../../../images/sundarpichai.jpg';
import Testimonial from '../Testimonial/Testimonial';

// const testimonialData = [
//     {
//         id: 1,
//         author: 'Elon mask',
//         description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//         Ullam, aliquam recusandae. Architecto officiis ab velit.`,
//         authorPhoto: elon,
//         designation: 'CEO, spaceX',
//         rating: 5
//     },
//     {
//         id: 2,
//         author: 'Bill gates',
//         description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//         Ullam, aliquam recusandae. Architecto officiis ab velit.`,
//         authorPhoto: bill,
//         designation: 'CEO, Microsoft',
//         rating: 5
//     }, {
//         id: 3,
//         author: 'Sundar pichai',
//         description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//         Ullam, aliquam recusandae. Architecto officiis ab velit.`,
//         authorPhoto: shundar,
//         designation: 'CEO, Google',
//         rating: 5
//     },
//     {
//         id: 4,
//         author: 'Steave jobs',
//         description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//         Ullam, aliquam recusandae. Architecto officiis ab velit.`,
//         authorPhoto: steave,
//         designation: 'CEO, Apple',
//         rating: 5
//     },
// ]

const Testimonials = () => {
    const [testiminials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch(`https://studio-dew-drops.herokuapp.com/getReview`)
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <section className="my-5">
            <h1 className="text-center text-secondary mb-5">TESTIMONIAL'S</h1>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        testiminials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonials;