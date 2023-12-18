import React from 'react'
import askmeai_logo from '../../assets/askmeai_logo.png'
import ctu_logo from '../../assets/ctu_logo.png'
import open_ai_logo from '../../assets/open_ai_logo.png'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUpForm() {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label style={{color: 'white'}}>Username</Form.Label>
                <Form.Control type="text" style={{width: '100%'}}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{color: 'white'}}>Password</Form.Label>
                <Form.Control type="password" style={{width: '100%'}}/>
            </Form.Group>
            <section style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                <Form.Check name='regType' type='radio' label="Teacher" style={{color: 'white'}}/>
                <Form.Check name='regType' type='radio' label="Student" style={{color: 'white'}}/>
                <Form.Check name='regType' type='radio' label="Others" style={{color: 'white'}}/>
            </section>
        </Form>
    )
}

function Signup() {
  return (
    <>
        <div style={{display: 'flex',padding: '2rem', paddingTop: '3rem'}}>
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
            <section style={{width: '50%', display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '20rem'}}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={askmeai_logo} width='200px' alt="askmeai_logo"/>
                    </div>
                    <h2 style={{color: 'white', fontSize: '1.5rem', textAlign: 'center'}}>Create your account</h2>
                    <SignUpForm /><br />
                    <div style={{display: 'flex', gap: '1rem', color: 'white', justifyContent: 'center'}}>
                        <p >Already have an account?</p>
                        <a href="s" style={{color: '#2CF6B3'}}>Log In</a>
                    </div>
                </div>
            </section>
            
        </div>
        
        
    </>
    
  )
}

export default Signup