import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import AboutPresentation from './AboutPresentation';

function Apropos() {
    return(
        <div>
            <div className='HBAapropos' style={{ padding: '20px' }}>
                <Header />
                <Banner isAboutPage={true}/>
                <AboutPresentation />
            </div>
            <Footer />
        </div>
    )
}

export default Apropos;