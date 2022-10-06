import './homeCss.css';
import { Link } from "react-router-dom"
import { FaArrowDown } from "react-icons/fa";
const Home = () => {

    return (
        <>
            <div id='contein'>
                <div className='div-home'>
                    <div className='title'>
                        <div>
                            <h1 className='ulises'>Ulises Farfan</h1>
                            <h3 className='fsd'>Full Stack Developer</h3>
                        </div>
                    </div>
                    <div className='button'>
                        <a href="#aboutme" className='abutton'>
                            <button className='homeButton'><FaArrowDown className='arrow' /></button>
                        </a>
                    </div>
                </div>
                <div id='aboutme'>
                    <div className='div-me'>
                        <span className='title-about'>¿Who I am?</span>
                        <p></p>
                    </div>
                    <div className='div-me'>
                        <span className='title-about'>Skills</span>
                    </div>
                    <div className='aboutEnd'>
                        <Link to="/proyectos">
                            <button className='buttonEnd'>
                                Proyects
                            </button>
                        </Link>
                        <button className='buttonEnd'>Contact me</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;