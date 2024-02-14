import logoK from './logoKasa.png';
import '../style/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="AppHeader">
        <header className="AppEntete">
          <img src={logoK} className="AppLogoK" alt="logo de Kasa" />
          <div>
            <nav className="menu">
                <li className="navList">
                    <Link to="/">Accueil</Link>
                </li>
                <li className="navList">
                <Link to="./Apropos">A propos</Link>
                </li>
            </nav>
          </div>
        </header>
      </div>
    );
  }

  export default Header;
