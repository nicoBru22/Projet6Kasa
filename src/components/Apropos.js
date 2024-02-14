import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from './Banner';
import AboutPresentation from '../components/AboutPresentation';

function Apropos() {
    return(
        <div>
        <Header />
        <Banner isAboutPage={true}/>
        <AboutPresentation />
        <Footer />
        </div>
    )
}

export default Apropos;