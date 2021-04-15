import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact ">
            <div className="container">
                <div className="text-center">
                    <h5 className="text-white mt-5 py-5">CONTACT US</h5>
                    <h1 className="text-center text-white">Let us handle your project, professionally.</h1>
                </div>
                <div className="col-md-9 mx-auto my-5">
                    <form action="">
                        <div className="form-group py-2">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group py-2">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group py-2">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center py-2">
                            <button type="button" className="btn btn-success"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;