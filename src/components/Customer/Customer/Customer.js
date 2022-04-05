import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('pk_test_51IglHfB0DN6dXmVL82wmQLVnfQKVZ4TXq3BdxiY2xQlGaqtjBVDelawKXra4NfiZrysnOU2462kTGJHqi4Qxsecf00TC0rgQMQ');
const Customer = () => {
    const history = useHistory();
    const [services, setServices] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { id } = useParams();
    const { name, email } = loggedInUser;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const bookServiceData = {
            serviceName: services.serviceName,
            price: services.price,
            name: loggedInUser.name,
            email: loggedInUser.email,
            status: "pending"
        }
        const url = `https://studio-dew-drops.herokuapp.com/checkout`
        console.log(bookServiceData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookServiceData)
        })
            .then(response => {
                alert('service added successfully')
                console.log(response)
            })
    };

    useEffect(() => {
        fetch(`https://studio-dew-drops.herokuapp.com/service/` + id)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [id])
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main-content">
                <main>
                    <section className="recent">
                        <div className="activity-grid">
                            <div className="activity-card">
                                <h3>Book Service</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ti-user" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="name" disabled
                                            defaultValue={loggedInUser.name} {...register("name")}
                                            placeholder="" aria-label="name"
                                            aria-describedby="basic-addon1" />
                                        <span className="input-group-text ti-agenda" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="email" disabled
                                            defaultValue={loggedInUser.email} {...register("email")}
                                            placeholder="" aria-label="email"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ti-user" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="serviceName" disabled
                                            defaultValue={services.serviceName} {...register("serviceName")}
                                            placeholder="Enter service name" aria-label="serviceName"
                                            aria-describedby="basic-addon1" />
                                        <span className="input-group-text ti-agenda" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="price" disabled
                                            defaultValue={services.price} {...register("price")}
                                            placeholder="Enter service price" aria-label="price"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                    <div>
                                        <Elements stripe={stripePromise}>
                                            <PaymentCard></PaymentCard>
                                        </Elements>
                                    </div>
                                    <input type="submit" className="btn btn-primary m-4" />
                                </form>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default Customer;