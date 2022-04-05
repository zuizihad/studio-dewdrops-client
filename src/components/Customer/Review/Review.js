import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import axios from 'axios';

const Review = () => {
    const [review, setReview] = useState([]);
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            company: data.company,
            description: data.description,
            imageURL: imageURL
        }
        const url = `https://studio-dew-drops.herokuapp.com/addReview`
        console.log(reviewData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(response => {
                alert('reviewData added successfully')
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
                                <h3>Add Review</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ti-user" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="name"
                                            defaultValue="sundar pichai" {...register("name", { required: true })}
                                            placeholder="Enter your name" aria-label="name"
                                            aria-describedby="basic-addon1" />
                                        <span className="input-group-text ti-agenda" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="company name/designation"
                                            defaultValue="google inc" {...register("company", { required: true })}
                                            placeholder="Enter service price" aria-label="company"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ti-money" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="description"
                                            defaultValue="some dummy dext" {...register("description", { required: true })}
                                            placeholder="Enter review details" aria-label="description"
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

export default Review;