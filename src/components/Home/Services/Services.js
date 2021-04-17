import React, { useContext, useEffect, useState } from 'react';
import Service from '../Service/Service';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCameraRetro, faCamera, faAddressBook, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';

const serviceData = [
    {
        id: 1,
        title: 'black and white photocopy',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nemo eius, nisi nostrum voluptatum obcaecati cum.`,
        icon: faCamera,
    },
    {
        id: 2,
        title: 'colorful photocopy',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nemo eius, nisi nostrum voluptatum obcaecati cum.`,
        icon: faCameraRetro,
    },
    {
        id: 3,
        title: 'thesis/project paper binding',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nemo eius, nisi nostrum voluptatum obcaecati cum.`,
        icon: faAddressBook
    },
    {
        id: 4,
        title: 'photo black and white',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nemo eius, nisi nostrum voluptatum obcaecati cum.`,
        icon: faCamera
    },
    {
        id: 5,
        title: 'photo colorful',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nemo eius, nisi nostrum voluptatum obcaecati cum.`,
        icon: faCameraRetro
    },
    {
        id: 6,
        title: 'web browsing',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nemo eius, nisi nostrum voluptatum obcaecati cum.`,
        icon: faDesktop
    },
]

const Services = () => {
    const [services, setServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <h1 className="text-center my-5 text-secondary">OUR SERVICES</h1>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;