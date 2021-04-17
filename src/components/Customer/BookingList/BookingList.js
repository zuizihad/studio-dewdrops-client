import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookingList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [loggedInUser])


    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main-content">
                <main>
                    <h3>Booking List</h3>
                    <table className="order-card">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>serviceName</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {
                            booking.map(order => <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                            </tr>)
                        }
                        <tbody>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
};

export default BookingList;