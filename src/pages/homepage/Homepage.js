import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import ai_illustration from '../../assets/ai_illustration.png'
import { Button } from 'react-bootstrap'
function Homepage() {
  return (
    <>
      <NavigationBar/>
      <section style={{color: 'white', display: 'flex', margin: '2rem', gap: '3rem', justifyContent: 'center', alignItems: 'center', background: '#04050A', height: '80%', borderRadius: '10px'}}>
        <div style={{width: '32rem'}}>
            <h1 style={{fontSize: '4rem', color: '#2CF6B3'}}>Ask Me AI</h1>
            <p>Experience the future at CTU Argao with Ask Me AI, the first of its kind—an innovative app that opens the doors to limitless knowledge and assistance, seamlessly integrating artificial intelligence into our campus community.</p><br />
            <div style={{display: 'flex', gap: '1rem'}}>
                <Button style={{background: '#2CF6B3', padding: '0.5rem', width: '30%'}}>Try it now</Button>
                <Button style={{border: '2px solid #2CF6B3', background: 'none', padding: '0.5rem', width: '30%'}}>Learn more</Button>
            </div>
        </div>
        <div style={{width: '32rem'}}>
            <img src={ai_illustration} alt='' width='90%' />
        </div>
      </section>
    </>
  )
}

export default Homepage
