import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assets/Logos/Components/Logo';

export default function HeaderNav() {
    return (
        <nav className='navbar navbar-expand-sm'>
            <a href='/' className='navbar-brand'>
                <div id='logo'>
                    <Logo />
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item pr-4'>
                        <a className='nav-link' href='/#/join'>Join</a>
                    </li>
                    <li className='nav-item pr-4'>
                        <a className='nav-link' href='/#/about'>About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};