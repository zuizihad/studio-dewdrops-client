import React, { useContext, useState } from 'react';
import {
    Link
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const serviceData = {
            serviceName: data.serviceName,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addService`
        console.log(serviceData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(response => {
                alert('service added successfully')
                console.log(response)
            })
    };
    const handleImage = event => {
        const imageData = new FormData()
        imageData.set('key', 'bcaa76da5c37cf7520b24da6b76c88ea');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res?.data?.data?.display_url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main-content">
                <main>
                    <section className="recent">
                        <div className="activity-grid">
                            <div className="activity-card">
                                <h3>Add Service</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ti-user" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="serviceName"
                                            defaultValue="colorful photo" {...register("serviceName", { required: true })}
                                            placeholder="Enter service name" aria-label="serviceName"
                                            aria-describedby="basic-addon1" />
                                        <span className="input-group-text ti-agenda" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="price"
                                            defaultValue="550" {...register("price", { required: true })}
                                            placeholder="Enter service price" aria-label="price"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ti-money" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="description"
                                            defaultValue="some dummy dext" {...register("description", { required: true })}
                                            placeholder="Enter service description" aria-label="description"
                                            aria-describedby="basic-addon1" />
                                        <span className="input-group-text ti-image" id="basic-addon1"></span>
                                        <input name="exampleRequired" type="file"
                                            className="form-control" id="inputGroupFile04" onChange={handleImage}
                                            aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                    </div>
                                    <br />
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

export default AddService;