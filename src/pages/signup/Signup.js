import React from 'react'
import askmeai_logo from '../../assets/askmeai_logo.png'
import askmeai_bg from '../../assets/askmeai_bg.jpg'
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
    <div>
        <img style={{position: 'absolute', zIndex: -1}} src={askmeai_bg} width="100%" alt=''/>
        <section style={{position: 'absolute', left: '50%', width: '28%'}}>
            <div className="header">
                <img className='logo' src={askmeai_logo} width='100%' alt="askmeai_logo" />
                <h2 style={{color: 'white', fontSize: '1.5rem', textAlign: 'center'}}>Create your account</h2>
            </div>
            <SignUpForm /><br />
            <div style={{display: 'flex', gap: '1rem', color: 'white', justifyContent: 'space-evenly'}}>
                <p >Already have an account?</p>
                <a href="s">Log In</a>
            </div>
        </section>
    </div>
    
  )
}

export default Signup