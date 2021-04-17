import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser])
    return (
        <div>
            <input type="checkbox" name="" id="sidebar-toggle" value="" />
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3 className="brand">
                        <span className="ti-unlink"></span>
                        <span>DEWDROPS</span>
                    </h3>
                    <label for="sidebar-toggle" className="ti-menu-alt"></label>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        {
                            isAdmin &&
                            <li>
                                <Link to="/orderList">
                                    <a href="">
                                        <span className="ti-home"></span>
                                        <span>Order list</span>
                                    </a>
                                </Link>
                            </li>
                        }
                        {
                            isAdmin &&
                            <li>
                                <Link to='/addService'>
                                    <a href="">
                                        <span className="ti-face-smile"></span>
                                        <span>Add service</span>
                                    </a>
                                </Link>
                            </li>
                        }
                        {
                            isAdmin &&
                            <li>
                                <Link to='/makeAdmin'>
                                    <a href="">
                                        <span className="ti-agenda"></span>
                                        <span>Make admin</span>
                                    </a>
                                </Link>
                            </li>
                        }

                        {
                            isAdmin &&
                            <li>
                                <Link to='/manageService'>
                                    <a href="">
                                        <span className="ti-agenda"></span>
                                        <span>Manage service</span>
                                    </a>
                                </Link>
                            </li>
                        }
                        <li>
                            <Link to="/service/:id">
                                <a href="">
                                    <span className="ti-agenda"></span>
                                    <span>Book Service</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/bookingList'>
                                <a href="">
                                    <span className="ti-agenda"></span>
                                    <span>Booking List</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/review'>
                                <a href="">
                                    <span className="ti-agenda"></span>
                                    <span>Review</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;