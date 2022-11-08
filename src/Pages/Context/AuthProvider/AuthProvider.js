import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../../firebase.config';


export const AuthContext=createContext();

const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const provider= new GoogleAuthProvider()
    // create user 
    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // sign in 

    const login =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // google sign in 

    const googleSignIn=()=>{
        setLoading(true);
       return signInWithPopup(auth,provider)
    };

    // sign out 

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }


    const authInfo={user, loading, createUser, login, googleSignIn, logOut }

    useEffect(()=>{
        const unSubscriber=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })
        return()=>{
            unSubscriber()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;