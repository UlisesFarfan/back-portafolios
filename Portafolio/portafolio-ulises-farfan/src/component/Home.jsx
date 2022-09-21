import './homeCss.css'
import Nav from './Nav';

const Home = () => {
    return (
        <div className='div-home'>
                  <Nav />
            <div className='title'>
            <div>
            <h1 className='ulises'>Ulises Farfan</h1>
            <h3 className='fsd'>Full Stack Developer</h3>
            </div>
            </div>
        </div>
    )
}
export default Home;