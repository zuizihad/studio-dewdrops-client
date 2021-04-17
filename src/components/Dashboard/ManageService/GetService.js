import React from 'react';

const GetService = ({ service }) => {
    const { _id, serviceName, price } = service;
    const handleDelete = (id) => {
        const url = `https://floating-retreat-39359.herokuapp.com/deleteService/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then(data => {
                alert('service deleted successfully')
            })
    }
    return (
        <tr>
            <td>{serviceName}</td>
            <td>{price}</td>
            <td className="span-icon">
                <span className="ti-pencil-alt"></span>
                <span className="ti-trash" onClick={() => handleDelete(_id)}></span>
            </td>
        </tr>
    );
};

export default GetService;