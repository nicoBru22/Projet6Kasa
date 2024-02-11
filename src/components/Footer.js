import '../style/Footer.scss';
import logoK from './logoKasa.png';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <div>
                <img src={logoK} className="logoKFooter" alt="logo de Kasa" />
                </div>
                <div className="footerCopyright">
                    2020 Kasa. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer;


