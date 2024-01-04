import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import Homepage from '../pages/homepage/Homepage';
import Chat from '../pages/chat/Chat';
import { useLog } from '../context/Context';
import { useEffect, useState } from 'react';

const RouterDom = () => {
 const {account} = useLog();
 const [isLog, setIsLog] = useState(false);

 useEffect(() => {
   const {userName} = account;
   if(userName) {
      console.log("🚀 ~ file: routes.js:16 ~ useEffect ~ userName:", userName)
      setIsLog(true)
   } else {
      setIsLog(false)
   }
   console.log("🚀 ~ file: routes.js:15 ~ useEffect ~ account:", account)
   }, [account])

 return (
    <>
      <Router>
         {!isLog ? 
            <Routes>
               <Route path="/ask-me-ai" element={<Login />} />
               <Route path="/SignUp" element={<Signup />} />
            </Routes> : 
            <Routes>
               <Route path="/HomePage" element={<Homepage />} />
               <Route path="/Chat" element={<Chat />} />
         </Routes>
         }
      </Router>
    </>
 );
};

export default RouterDom;
