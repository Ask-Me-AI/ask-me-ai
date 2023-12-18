import React from 'react'
import logo from '../assets/askmeai_logo.png'
function Footer() {
  return (
    <>
      <section style={{display: 'flex', justifyContent: 'space-around',background: '#04050A', width: '100%', height: '38%', padding: '2rem'}}>
        <div style={{color: 'white',}}>
          <h3 style={{padding: '0rem 2rem 0rem 0rem', fontSize: '3rem'}}>Team Error List</h3>
          <ul>
            <li>Nino Cartesiano</li>
            <li>Roselyn Mae Parilla</li>
            <li>Angela Mae Blanca</li>
            <li>Clyde Bustamante</li>
            <li>Joel Dib</li>
          </ul>
        </div>
        <div>
          <h3 style={{padding: '0rem 2rem 0rem 0rem',color: '#2CF6B3', fontSize: '3rem'}}>Ask Me AI</h3>
          <div style={{color: 'white'}}>
            <p>Cebu Technological University<br />Argao Campus</p>
          </div>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
            <a href='s'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' width="30px"alt=''/>
            </a>
            <a href='s'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png' width="30px"alt=''/>
            </a>
            <a href='s'>
              <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' width="30px"alt=''/>
            </a>
            <a href='s'>
              <img src='https://cdn-icons-png.flaticon.com/512/281/281769.png' width="30px"alt=''/>
            </a>
          </div>
        {/* <img src={logo} width='60px' alt=''/> */}
      </section>
      <section style={{width: '100%', background: '#121212', textAlign: 'center', height: '3rem', padding: '1rem', color: 'white', fontStyle: 'light'}}>
        <h6>All rights reserve|Copyright @ 2024</h6>
      </section>
    </>
  )
}

export default Footer
