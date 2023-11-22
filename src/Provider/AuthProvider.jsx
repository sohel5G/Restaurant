import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/AuthConfig";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AllContext = createContext()

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();

    const googleSignInWithPopup = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdateOnSignUp = (userInfo) => {
        // setLoading(true);
        return updateProfile(auth.currentUser, userInfo)
    }
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userlogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser) {
                const userEmail = { email: currentUser.email };

                axiosPublic.post('/jwt', userEmail)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            console.log('token set to local store');
                            setLoading(false);
                        }
                    })

            } else {
                localStorage.removeItem('access-token');
                console.log('Token removed from local store');
                setLoading(false);
            }


            // setLoading(false);
        });


        return () => {
            unSubscribe()
        }
    }, [])



    const allInfo = {
        user,
        setUser,
        loading,
        googleSignInWithPopup,
        registerUser,
        userLogIn,
        userlogOut,
        userUpdateOnSignUp
    }
    return (
        <>
            <AllContext.Provider value={allInfo}>
                {children}
            </AllContext.Provider>
        </>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};
