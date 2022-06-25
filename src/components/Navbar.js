import './Navbar.css'
import Button from './Button'
import MenuOption from './MenuOption'

function Navbar(props) {
    return (
        <div className="Navbar">
            <div className='Nav-link'>
                <img className='logo' src='https://wabot.net/svg/logo-ret-white.svg' alt='logo'/>
                <MenuOption text='Início' link='#'/>
                <MenuOption text='Caralho' link='#'/>
                <MenuOption text='Buceta' link='#'/>
            </div>
            <Button>Testando</Button>
        </div>
    )
}

export default Navbar