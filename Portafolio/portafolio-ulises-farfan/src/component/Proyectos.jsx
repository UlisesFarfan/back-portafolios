import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';
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
      <div className='game-app'>
        <h1>
          Game App
        </h1>
        {button ? <div className='ga-des' >
          <button className='ga-button' onClick={() => handleButton()} >
          Watch
          </button>
          <h3>
            Descripción:
          </h3>
        </div> : <button className='ga-button'  onClick={() => handleButton()}>
        Watch
        </button>}
        <iframe src="https://pi-ulises-farfan.vercel.app" frameBorder="0" className='photo-home' style={ button ? color : null }></iframe>
      </div>
      <div className='game-match'>
        <h1>
          Game Match
        </h1>
        { buttonGm ? <div className='gm-des'>
        <button className='gm-button' onClick={() => handleButtonGm()} >
          Watch
          </button>
        <h3>
          Description:
        </h3>
        <p>
          GameMatch is a mobile app developed to connect players in real time <br /><br />
          In this project we participate 7 people using Scrum <br /> <br />
          On the technical side we use: React Native, Redux, Soket.io, Mercadopago, Node.js, Express, MongoDB and Sequelize. <br /><br />
          Link to github: <a href="https://github.com/J1I2B345/GameMatch">Game Match</a>
        </p>
        </div> : <button className='gm-button'  onClick={() => handleButtonGm()}>
        Watch
        </button>
        }
        <YouTube videoId="bdFyQGHnN-E" opts={opts} onReady={onPlayerReady} className='video' style={buttonGm ? color : null} />
        <button>
          Download
        </button>
      </div>
    </div>
  )
}
export default Proyectos;