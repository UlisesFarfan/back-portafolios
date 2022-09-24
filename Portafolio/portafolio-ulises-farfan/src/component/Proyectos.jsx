import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import './proyectosCss.css'

const Proyectos = () => {

  const [button, setButton] = useState(true)
  const [buttonGm, setButtonGm] = useState(true)
  const handleButton = () => {
    setButton(!button)
    return
  }
  const handleButtonGm = () => {
    setButtonGm(!buttonGm)
    return
  }
  const color = {
    filter: 'blur(3px)'
  }
  const opts = {
    height: '100%',
    width: '100%',
  };
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  }

  return (
    <div className='p-conteiner'>
      <Nav />
      <div className='game-match'>
        <h1 className='textP'>
          Game Match
        </h1>
        { buttonGm ? <div className='gm-des'>
        <button className='gm-button' onClick={() => handleButtonGm()} >
          Watch
          </button>
        <div className='text-gm'>
        <h3>
          Description:
        </h3>
        <p>
          GameMatch is a mobile app developed to connect players in real time <br /><br />
          In this project we participate 7 people using Scrum.<br /> <br />
          On the technical side we use: React Native, Redux, Soket.io, Mercadopago, Node.js, Express, MongoDB and Sequelize. <br /><br />
        </p>
        <p className='links'>
          Link to github: <a href="https://github.com/J1I2B345/GameMatch">Game Match</a><br />
          Link to Download: <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jbev/gamematch-5bbc610f3d7b4a22a3cc53b890566b03-signed.apk">Download App</a>
        </p>
        </div>
        </div> : <button className='gm-button'  onClick={() => handleButtonGm()}>
        Watch
        </button>
        }
        <YouTube videoId="bdFyQGHnN-E" opts={opts} onReady={onPlayerReady} className='video' style={buttonGm ? color : null} />
      </div>
      <div className='game-app'>
        <h1 className='textP'>
          Game App
        </h1>
        {button ? <div className='ga-des' >
          <button className='ga-button' onClick={() => handleButton()} >
          Watch
          </button>
        <div className='text-gm'>
        <h3>
            Descripción:
          </h3>
        </div>
        </div> : <button className='ga-button'  onClick={() => handleButton()}>
        Watch
        </button>}
        <iframe src="https://pi-ulises-farfan.vercel.app" frameBorder="0" className='photo-home' style={ button ? color : null }></iframe>
      </div>
    </div>
  )
}
export default Proyectos;