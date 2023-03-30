import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import axios from 'axios';

const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false)
    const [blogData, setblogData] = useState([]);

    const googleProvider = new GoogleAuthProvider()




    //google Log in
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //create new user 
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logIn User
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //update Profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    //Log Out 
    const logOut = () => {
        return signOut(auth)
    }

    //save user in auth
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            subscribe()
        }
    }, []);

    // loadBlogData 
     // Load blog data
     useEffect( () =>{
        axios.get('/blogDetails.json')
        .then(function (res){
            setblogData(res.data)
        })
        .catch(function (err){
            console.log(err)
        })
    },[]); 

    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        axios.get('/hotel.json')
            .then(function (res) {
                setHotels(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])

    const authInfo = { user, setUser, googleLogIn, createNewUser, logIn, updateUserProfile, logOut,loading,blogData, hotels }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };