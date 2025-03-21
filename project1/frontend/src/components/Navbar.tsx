import { useNavigate } from 'react-router-dom'
import logo from '../assets/Navbar/logo.svg'
import '../styles/components/Navbar.css'
import SecondaryButton from './SecondaryButton'

type NavbarProp = {
    showLink : boolean;
}

function Navbar({showLink} : NavbarProp){

    const navigate = useNavigate();

    function handleRegister(){
        navigate('/register')
    }

    function handleHome(){
        navigate('/home')
    }

    function handleBoard(){
        navigate('/board')
    }

    return(
        <nav>
            <div onClick={handleHome} className="logo">
                <img src={logo} alt="logo of tasks" />
                <h1>Task Master</h1>
            </div>
            {showLink && (
                <ul className = 'links'>
                    <li><a className = 'link' href="">Boards</a></li>
                    <li><a className = 'link' href="">Admin Panel</a></li>
                    <SecondaryButton text = 'New Board' onClick={() => handleBoard()}/>
                    <li><a onClick={handleRegister} className = 'link' href="">Sign Up</a></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar