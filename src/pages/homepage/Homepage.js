import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import ai_illustration from '../../assets/ai_illustration.png'
import { Button } from 'react-bootstrap'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import '../../../src/style.css'

function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar/>
      <section className="home-page" style={{color: 'white', display: 'flex', gap: '3rem', justifyContent: 'center', alignItems: 'center', background: '#04050A', height: '80%', borderRadius: '10px'}}>
        <div style={{width: '32rem', padding: '1rem'}}>
            <h1 className="gradient-text" style={{fontSize: '4rem'}}>Ask Me AI</h1>
            <p>Experience the future at CTU Argao with Ask Me AI, the first of its kind, an innovative app that opens the doors to limitless knowledge and assistance, seamlessly integrating artificial intelligence into our campus community.</p><br />
            <div className='home-page-btn' style={{display: 'flex', gap: '1rem', width: '100%'}}>
                <Button onClick={() => navigate('/Chat')} className="gradient-button" style={{padding: '0.5rem', width: '9rem'}}>Try it now</Button>
                <Button style={{border: '2px solid #2CF6B3', background: 'none', padding: '0.5rem', width: '9rem'}}><a href="#footer" style={{textDecoration: 'none', color: 'white'}}>About Us</a></Button>
            </div>
        </div>
        <div className='home-image' style={{width: '32rem'}}>
            <img style={{imageResolution: '300dpi',}} src={ai_illustration} alt='' width='90%' />
        </div>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </>
  )
}

export default Homepage
