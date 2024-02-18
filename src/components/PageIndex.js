import Header from './Header';
import Footer from './Footer';
import CardsAccueil from './logements';
import Banner from './Banner';

function HomePage() {
    return(
        <html className="HomePage">
            <body>
                <Header />
                <Banner isAboutPage={false} />
                <CardsAccueil />
                <Footer />
            </body>
        </html>
    )
}

export default HomePage;