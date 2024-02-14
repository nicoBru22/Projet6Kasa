import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/logements';
import Banner from './Banner';

function HomePage() {
    return(
        <div className="HomePage">
            <Header />
            <Banner isAboutPage={false} />
            <Cards />
            <Footer />
        </div>
    )
}

export default HomePage;