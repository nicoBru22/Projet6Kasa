import Header from './Header';
import Footer from './Footer';
import CardsAccueil from './logements';
import Banner from './Banner';

function HomePage() {
    return(
        <html className="HomePage">
            <body>
                <div className='HBCindex' style={{ padding: '20px' }}>
                    <Header />
                    <Banner isAboutPage={false} />
                    <CardsAccueil />
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default HomePage;