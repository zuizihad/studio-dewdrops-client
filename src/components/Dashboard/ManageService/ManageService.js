import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import GetService from './GetService';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `https://studio-dew-drops.herokuapp.com/services`;
        fetch(url)
            .then((response) => response.json())
            .then(data => setServices(data))
    }, [services])
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main-content">
                <main>
                    <section class="recent">
                        <div class="activity-grid">
                            <div class="activity-card">
                                <h3>Manage Service</h3>
                                <div class="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                services.map(service => <GetService key={service._id} service={service}></GetService>)
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>

                    </section>
                </main>
            </div>
        </div>
    );
};

export default ManageService;