import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminData = {
            email: data.email,
            role: 'admin',
        }
        const url = `https://studio-dew-drops.herokuapp.com/addAdmin`
        console.log(adminData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(response => {
                alert('admin added successfully')
                console.log(response)
            })
    };
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
                                        <input type="email" className="form-control" name="email"
                                            defaultValue={""} {...register("email")}
                                            placeholder="enter an email to make admin" aria-label="email"
                                            aria-describedby="basic-addon1" />
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

export default MakeAdmin;