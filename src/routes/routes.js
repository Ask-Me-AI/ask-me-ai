import { Routes, Route } from 'react-router-dom';
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import Homepage from '../pages/homepage/Homepage';
import Chat from '../pages/chat/Chat'
const RouterDom = () => {
 return (
    <>
       <Routes>
          <Route path="/ask-me-ai" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/HomePage" element={<Homepage />} />
          <Route path="/Chat" element={<Chat />} />
       </Routes>
    </>
 );
};

export default RouterDom;
