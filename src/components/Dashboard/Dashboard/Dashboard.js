import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main-content">
                <main>
                    <h1>order list</h1>
                </main>
            </div>

        </div>
    );
};

export default Dashboard;