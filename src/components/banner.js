import '../style/Banner.scss';

function Banner({ isAboutPage }) {
    return <div className={`banner ${isAboutPage ? 'about' : 'home'}`}>
        <div className={`accroche ${isAboutPage ? 'about' : ''}`}>
            Chez vous, partout et ailleurs
        </div>

    </div>;
}

export default Banner;