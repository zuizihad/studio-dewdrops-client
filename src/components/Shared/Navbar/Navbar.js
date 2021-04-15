import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">STUDIO DEWDROPS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-item">
                            <a className="nav-link active me-5" aria-current="page" href="#">Home</a>
                        </Link>
                        <Link to="/about" className="nav-item ">
                            <a className="nav-link me-5" href="#">About</a>
                        </Link>
                        <Link to="/services" className="nav-item">
                            <a className="nav-link me-5" href="#">Services</a>
                        </Link>
                        <Link to="/about" className="nav-item">
                            <a className="nav-link me-5" href="#">Reviews</a>
                        </Link>
                        <Link to="/blog" className="nav-item">
                            <a className="nav-link me-5" href="#">Blogs</a>
                        </Link>
                        <Link to="/about" className="nav-item">
                            <a className="nav-link me-5" href="#">Contact us</a>
                        </Link>
                        {
                            (loggedInUser.email) ? (
                                <Link to="/login" className="nav-item me-5">
                                    <a className="nav-link">{loggedInUser.name}</a>
                                </Link>) :
                                (
                                    <Link to="/login" className="nav-item me-5">
                                        <a className="nav-link btn btn-success">Login</a>
                                    </Link>
                                )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;