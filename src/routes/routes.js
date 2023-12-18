import { Routes, Route } from 'react-router-dom';
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';

const RouterDom = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
       </Routes>
    </>
 );
};

export default RouterDom;
