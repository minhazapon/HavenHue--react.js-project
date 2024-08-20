import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



export const firecontext = createContext(null)

       const GProvider = new  GoogleAuthProvider()

const AuthContext = ({children}) => {
    

    const [user, setUser] =  useState(null)

    const createUser = ( email, password) =>{

        return createUserWithEmailAndPassword (  auth, email, password )

    }

    const signIn = (email, password) =>{

       return signInWithEmailAndPassword(auth, email, password)

    }


    const signGoogle = () =>{

        return signInWithPopup(auth, GProvider)

    }


    const logOut = () => {
      
        signOut(auth)
    }

         /////////////
         useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
          
         })
         return() => {
            unSubscribe();
         }
         } , [])
    
        ///////////////

    
    const authInfo = {user, createUser, signIn,  signGoogle, logOut }

    return (
        <div>

            <firecontext.Provider value={authInfo} >
                
                {children}

            </firecontext.Provider>
            
        </div>
    );
};

export default AuthContext;