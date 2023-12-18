import { Routes, Route } from 'react-router-dom';
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import Homepage from '../pages/homepage/Homepage';

const RouterDom = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/HomePage" element={<Homepage />} />
       </Routes>
    </>
 );
};

export default RouterDom;
