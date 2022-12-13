import React, { useEffect } from "react";
import {useState, useContext} from 'react'
import axios from 'axios'

import { AppContext } from './Context'

import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";
import { validateUser } from "../api";

const Login = ({setAuth}) => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  
  const [{ user }, dispatch] = useStateValue();

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      if (userCred){
        setAuth(true);
        window.localStorage.setItem("auth","true");
        firebaseAuth.onAuthStateChanged((userCred) => {
          if (userCred) {
            userCred.getIdToken().then((token) => {
              userCred.getIdToken().then((token) => {
             validateUser(token).then((data) => {
              dispatch({
                type : actionType.SET_USER,
                user: data
             })
             }  )
              });
              navigate("/", { replace: true });
            });
          
          } else {
            setAuth(false);
            dispatch({
              type : actionType.SET_USER,
              user: null
           })
            // window.localStorage.setItem("auth", "false");
            navigate("/login");
          }
        });
      }
      })
    }

    // const {Appdata} = useContext(AppContext)
   

    // const [data, setData] = useState({
    //     email: '', //emailOruser: ''
    //     username: '',
    //     password: ''
    //   })

    // const handleLogin = async () => {

    //     if ((!data.email && !data.username) || !data.password) {
    //         alert('Please provide some data')
    //         return
    //     }

    //     const response = await axios.post('/user/login', data)
    //     console.log("🚀 ~ response", response)

    //     if (response.data.success) {
    //        Appdata({
    //             type: 'login',
    //             payload: {...response.data.user}
    //         })
    //         navigate('/posts')
    //     }
          
    // }

   
 
   
 

//   useEffect(() => {
//     if (window.localStorage.getItem("auth") === "true")
//       navigate("/", { replace: true });
//   }, []);
// // 
  return (
   <>
      {/* <div className='flex items-center 
      w-[400px]
      justify-center gap-[20px] h-[400px] p-[40px] 
      flex-col border-2 border-slate-500 rounded-md'>
          <h3>Welcome to WDPT010 social app</h3>
          <input 
              className='border-2 border-slate-500 p-[5px]'
              placeholder='type your email' value={data.email} onChange={e => setData({...data, email: e.target.value })}/>
          <input 
              className='border-2 border-slate-500 p-[5px]'
              placeholder='type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})}/>
          <input 
              className='border-2 border-slate-500 p-[5px]'
              placeholder='type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})}/>
          
          <button 
              className='border-2 border-slate-500 p-[5px]'
              onClick={handleLogin}>Login</button>
      </div> */}

    <div className="relative w-screen h-screen">
  
      <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md ">
          <div
            onClick={loginWithGoogle}
            className="flex items-center justify-center  gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all"
          >
            <FcGoogle className="text-xl" />
            <p>Sign in with Google</p>
          </div>
        </div>
      </div>
    // </div>
    </>
  );
}


export default Login;