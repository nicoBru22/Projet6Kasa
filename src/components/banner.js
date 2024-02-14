import '../style/Banner.scss';

function Banner({ isAboutPage }) {
    return <div className={`banner ${isAboutPage ? 'about' : ''}`}></div>;
}

export default Banner;