import { NavLink } from 'react-router-dom';
import './navCss.css'

const Nav = () => {
    return (
        <div id='nav-conteiner'>
            <div className='conteiner'>
                <div className='div-homeNav'>
                    <NavLink to='/' className='home'>
                        Home
                    </NavLink>
                </div>
                <div className='div-pc'>
                    <NavLink to='/proyectos' className='proyecto'>
                        Proyects    
                    </NavLink>
                    <NavLink to='/contacto' className='contacto'>
                        Contact me
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Nav;