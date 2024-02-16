import Header from './Header';
import Footer from './Footer';
import CardsAccueil from './logements';
import Banner from './Banner';

function HomePage() {
    return(
        <div className="HomePage">
            <Header />
            <Banner isAboutPage={false} />
            <CardsAccueil />
            <Footer />
        </div>
    )
}

export default HomePage;