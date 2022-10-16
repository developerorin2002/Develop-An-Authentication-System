import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user ,setUser] = useState();
    const [loading , setLoading] = useState(true);
    const registerUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const loginUser = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password);
    }

    useEffect(()=>{
        const onAuth = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return onAuth;
    },[]);

    const handleGoogleSingIN = () =>{
        const provider =  new GoogleAuthProvider(); 
        signInWithPopup(auth , provider)
        .then(res=>console.log(res.user))
        .catch(err=>{
            console.log(err)
        })
    };
    
    const handleLogout = () =>{
        return signOut(auth)
        .then(res=>{
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const userAuth = {registerUser ,loading ,loginUser , handleGoogleSingIN  , user , handleLogout}
    return (
        <AuthContext.Provider value={userAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;