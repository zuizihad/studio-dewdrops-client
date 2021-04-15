import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } }

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                setLoggedInUser(signedInUser);
                generateAuthToken();
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const generateAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(idToken => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const loginCard = {
        backgroundColor: '#DC3545',
        height: '400px',
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="d-flex justify-content-center">
                <div className="row w-25">
                    <div className="card" >
                        <div className="card-body" style={loginCard}>
                            <button className="btn btn-success h-25" onClick={handleGoogleLogin}>continue with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;