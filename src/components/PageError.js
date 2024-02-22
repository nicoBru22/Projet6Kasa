import Header from '../components/Header';
import Footer from '../components/Footer';
import Error404 from '../components/Error404'

function PageError() {
    return(
        <div>
            <div className='HEFerror' style={{ padding: '20px' }}>
                <Header />
                <Error404 />
            </div>
            <Footer />
        </div>
    )
}

export default PageError;