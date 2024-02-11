import logoK from './logoKasa.png';
import '../style/banner.scss';

function Banner() {
    return (
      <div className="AppHeader">
        <header className="AppEntete">
          <img src={logoK} className="AppLogoK" alt="logo de Kasa" />
          <div>
            <nav className="menu">
                <li className="navList">
                    Accueil
                </li>
                <li className="navList">
                    A propos
                </li>
            </nav>
          </div>
        </header>
      </div>
    );
  }

  export default Banner;
