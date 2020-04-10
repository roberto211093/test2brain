import React, { Component} from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as f from "firebase/app";
import "firebase/auth";
import firebase from "../Firebase";
import {Home} from "./Home";
// eslint-disable-next-line
const firebaseApp = f.initializeApp(firebase);

class Login extends Component {
    render() {
        const { user, signOut, signInWithGoogle } = this.props;
        return (
            <div>
                {
                    user
                        ? <Home username={user.displayName}/>
                        : <p> Please, sign in</p>
                }
                {
                    user
                        ? <button className='button is-danger' onClick={signOut}> Sign out</button>
                        : <button className='button is-info' onClick={signInWithGoogle}> Sign in with Google</button>
                }
            </div>
        );
    }
}
const firebaseAppAuth = f.auth();
const providers = {
    googleProvider: new f.auth.GoogleAuthProvider()
};
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
