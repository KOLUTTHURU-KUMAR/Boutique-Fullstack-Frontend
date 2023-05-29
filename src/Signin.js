import React,{useState,useEffect} from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app"
import { Link } from 'react-router-dom';

const firebaseApp = initializeApp({ 
  apiKey: "AIzaSyAhXxxClNApmcWSW72nk00DLsf-7GZG9jg",
  authDomain: "signin-e43bf.firebaseapp.com",
  projectId: "signin-e43bf",
  storageBucket: "signin-e43bf.appspot.com",
  messagingSenderId: "570005367090",
  appId: "1:570005367090:web:0eecd09bc3df1f5099cf2b",
  measurementId: "G-T9CXKWZECZ"
});
const auth = getAuth(firebaseApp);
const Signin = () => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
      onAuthStateChanged(auth,person=>{
        if(person){
          setUser(person);
        }
        else{
          setUser(null);
        }
      })
  
    },[]
    )
    const signInWithGoogle=async()=>{
      try{
        await signInWithPopup(auth,new firebase.auth.GoogleAuthProvider);
   
      }
     
      catch(err)
      {
        console.log(err);
  
      }
    }
  return (
    
        <div>
      <center>
        {user ?

        < div > 
        <Link to="/View">Cart Details</Link>
          <button onClick={()=>auth.signOut()}>Sign out</button>
 
        </div> :
      <button onClick={signInWithGoogle}>sign in with google</button>
      }
      </center>
        
    </div>
      
    
  )
}

export default Signin