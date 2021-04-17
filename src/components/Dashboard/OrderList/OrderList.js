import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const statusData = {
            status: data.status
        }
        const url = `http://localhost:5000/setOrderStatus`
        console.log(statusData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(statusData)
        })
            .then(response => {
                alert('statusData added successfully')
                console.log(response)
            })
    };

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main-content">
                <main>
                    <h3>Oder List</h3>
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
                            orders.map(order => <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.price}</td>
                                <td>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <select {...register("status")}>
                                            <option value="">{order.status}</option>
                                            <option value="done">done</option>
                                            <option value="pending">pending</option>
                                            <option value="going">going</option>
                                        </select>
                                        <input type="submit" />
                                    </form>
                                </td>
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

export default OrderList;