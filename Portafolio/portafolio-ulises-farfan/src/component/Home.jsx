import './homeCss.css'
import Nav from './Nav';
import { FaArrowDown } from "react-icons/fa";
import { useState, useEffect } from 'react';
const Home = () => {

    const [ scroll, setScroll ] = useState(0)
    useEffect(()=>{
        setScroll(document.getElementById('contein').clientHeight)
        console.log(document.getElementById('contein').clientHeight)
    })

    return (
        <>
            <div id='contein'>
                <div className='div-home'>
                    <Nav />
                    <div className='title'>
                        <div>
                            <h1 className='ulises'>Ulises Farfan</h1>
                            <h3 className='fsd'>Full Stack Developer</h3>
                        </div>
                    </div>
                    <div className='button'>
                        <h5 className='abutton'> About Me </h5>
                        <button className='homeButton' onClick={ () => (window.scroll({top: scroll - 1000, behavior: 'smooth'}))}><FaArrowDown className='arrow'/></button>
                    </div>
                </div>
                <div className='aboutme'>
                    <div className='div-me'>
                        <span className='title-about'>¿Who I am?</span>
                        <p></p>
                    </div>
                    <div className='div-me'>
                        <span className='title-about'>Skills</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;