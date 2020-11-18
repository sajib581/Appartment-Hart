import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../../Config/config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const Login = () => {
    const [user, setUser] = useState({})
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();  
    
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

      const loginHandeler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email, photoURL} = result.user
            const signedInUser = {
                name: displayName,
                email,
                img: photoURL
            }
            
            setLoggedInUser(signedInUser);            
            sessionStorage.setItem('user', signedInUser);
            history.replace(from);
            
          }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div>
            <div className="text-center mt-5" >
            <img height="50" src="https://i.ibb.co/ys7T9jg/Logo.png" alt=""/>
            </div>
            <div className="d-flex login align-items-center mx-auto my-5">
                <div>
                    <h3 className="text-center mb-4">Login with</h3>
                    <div style={{cursor:"pointer"}} onClick={loginHandeler} className="google p-2 d-flex align-items-center">
                        <img className="" src="https://i.ibb.co/x5wzGKp/google.png" alt="" />
                        <strong className="ml-5">Continiue with google</strong>
                    </div>
                    <p className="text-center">Don't have an account? <span className="text-primary">Create an account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;