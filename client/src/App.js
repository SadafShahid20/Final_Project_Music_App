import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import "./App.css";
import {
  getAuth,
  GoogleAuthProvider,
  inMemoryPersistence,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./config/firebase.config";
import { getAllSongs, validateUser } from "./api";
import Login  from './components/Login'
import Home  from './components/Home'
import Dashboard  from './components/Dashboard'
import MusicPlayer  from './components/MusicPlayer'
// import Loader  from './components/Loader'
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/Reducer";
import { motion, AnimatePresence } from "framer-motion";
import Music from './components/Music'
import Premium from './components/Premium'
import Contact from './components/Contact'
import Footer from "./components/Footer";

function App() {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const [{ user, allSongs, song, isSongPlaying, miniPlayer }, dispatch] =
    useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          // console.log(token);
          window.localStorage.setItem("auth", "true");
          validateUser(token).then((data) => {
            dispatch({
              type: actionType.SET_USER,
              user: data,
            });
          });
        });
        setIsLoading(false);
      } else {
        setAuth(false);
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
        setIsLoading(false);
        window.localStorage.setItem("auth", "false");
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    if (!allSongs && user) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data,
        });
      });
    }
  }, []);

  return (
    
      <div className="h-auto flex items-center justify-center min-w-[680px]">
        
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/*" element={<Home />} />
          <Route path="/musics" element={<Music />} />
          <Route path="/premium" element={<Premium/>} />
          <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard/*" element={<Dashboard />} /> 
          {/*  <Route path="/userProfile" element={<UserProfile />} /> */}
        </Routes>

      {isSongPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed min-w-[700px] h-26  inset-x-0 bottom-0  bg-cardOverlay drop-shadow-2xl flex items-center justify-center`}
          >
            <MusicPlayer />
        
         </motion.div>
        )} 
      </div>
  )
      }



export default App;