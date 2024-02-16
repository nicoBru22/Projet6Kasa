import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import AboutPresentation from './AboutPresentation';

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