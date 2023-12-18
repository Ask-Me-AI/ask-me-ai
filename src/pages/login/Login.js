import React from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import askmeai_logo from '../../assets/askmeai_logo.png'
import ctu_logo from '../../assets/ctu_logo.png'
import open_ai_logo from '../../assets/open_ai_logo.png'
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label style={{color: 'white'}}>Username</Form.Label>
                <Form.Control type="text" style={{width: '100%'}}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{color: 'white'}}>Password</Form.Label>
                <Form.Control type="password" style={{width: '100%'}}/>
            </Form.Group><br />
            <Button onClick={() => navigate('/HomePage')} style={{background: '#2CF6B3', padding: '0.5rem', width: '100%'}}>Log In</Button>
        </Form>
    )
}

function Login() {
  return (
    <>
        <div style={{display: 'flex',padding: '4rem', paddingTop: '3rem'}}>
            <section style={{width: '50%', display: 'flex', justifyContent: 'center', background: "#04050A", padding: '3rem', borderRadius: '10px'}}>
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
            <section style={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{color: 'white', textAlign: 'center', zIndex: '1'}}>
                    <h1 style={{fontSize: '3.5rem'}}>Welcome to Ask Me AI </h1>
                    <p style={{fontSize: '1rem', color: '#2CF6B3', letterSpacing: '0.5rem'}}>CTU - Argao AI Conversation Companion</p>
                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                        <img  width="80px" src={ctu_logo} alt=''/>
                        <img  width="80px" src={open_ai_logo} alt=''/>
                    </div>
                </div>
            </section>
            
        </div>
    </>
  )
}

export default Login
