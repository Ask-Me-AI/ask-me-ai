import React from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import askmeai_logo from '../../assets/askmeai_logo.png'
import ctu_logo from '../../assets/ctu_logo.png'
import bsit_logo from '../../assets/bsit_logo.png'
import open_ai_logo from '../../assets/open_ai_logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'
import {getDocs, collection} from '@firebase/firestore'
import { firestore } from '../../firebase'
import '../../../src/style.css'

function LoginForm() {
    const navigate = useNavigate();
    const userName = useRef('');
    const password = useRef('');
    const ref = collection(firestore, "datas");
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const d = await getDocs(ref);
            console.log("🚀 ~ file: AddFirebase.jsx:13 ~ getData ~ d:", d)
            setData(d.docs.map((doc) => ({...doc.data(),id: doc.id})))
            console.log("🚀 ~ file: AddFirebase.jsx:13 ~ getData ~ data:", data)
        }
        getData();
    }, [])
    
    const handleLogin = async (e) => {
        e.preventDefault();
        if(userName.current.value === "" || password.current.value === "") return;
        try {
            const isMatch = data.some((user) => user.username === userName.current.value && user.password === password.current.value);
            if(isMatch) {
                window.alert("Login successfully!");
                userName.current.value = "";
                password.current.value = "";
                navigate("/HomePage")
            } else {
                return window.alert("Incorrect username or password!");
            }
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
                <Form.Label style={{color: 'white'}}>Username</Form.Label>
                <Form.Control ref={userName} type="text" style={{width: '100%'}}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{color: 'white'}}>Password</Form.Label>
                <Form.Control ref={password} type="password" style={{width: '100%'}}/>
            </Form.Group><br />
            <Button type='submit' style={{background: '#2CF6B3', padding: '0.5rem', width: '100%'}}>Log In</Button>
        </Form>
    )
}

function Login() {
  return (
    <>
        <div className='login' style={{display: 'flex',padding: '4rem', paddingTop: '2rem', height: '100%'}}>
            <section style={{width: '100%', display: 'flex', height: '38rem', justifyContent: 'center', background: "#04050A", padding: '3rem', borderRadius: '10px'}}>
                <div style={{width: '20rem'}}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={askmeai_logo} width='150px' alt="askmeai_logo"/>
                    </div>
                    <h2 style={{color: 'white', fontSize: '1.5rem', textAlign: 'center'}}>Login to your account</h2><br />
                    <LoginForm /><br />
                    <div style={{display: 'flex', gap: '1rem', color: 'white', justifyContent: 'center'}}>
                        <p >Don't have an account?</p>
                        <Link to='/SignUp' style={{color: '#2CF6B3'}}>Sign Up</Link>
                    </div>
                </div>
            </section>
            <section style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{color: 'white', textAlign: 'center', zIndex: '1', padding: '1rem'}}>
                    <h1 style={{fontSize: '6.5rem'}}>Ask Me AI </h1>
                    <p style={{fontSize: '1rem', color: '#2CF6B3', letterSpacing: '0.3rem'}}>CTU - Argao AI Conversation Companion</p><br />
                    <p style={{fontSize: '1.5rem'}}>It's great to see you again! Log in to your account.</p><br />
                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                        <img  width="80px" src={ctu_logo} alt=''/>
                        <img  width="80px" src={open_ai_logo} alt=''/>
                        <img  width="80px" src={bsit_logo} alt=''/>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Login
