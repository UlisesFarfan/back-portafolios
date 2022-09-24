import './homeCss.css'
import Nav from './Nav';

const Home = () => {
    return (
        <>
            <div className='contein'>
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
                        <button className='homeButton' onClick={ () => (window.scroll({top: 10000, behavior: 'smooth'}))}>Abajo</button>
                    </div>
                </div>
                <div className='aboutme'>
                    <h1>HOla</h1>
                </div>
            </div>
        </>
    )
}
export default Home;