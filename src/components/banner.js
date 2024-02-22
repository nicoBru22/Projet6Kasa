import '../style/Banner.scss';

function Banner({ isAboutPage }) {
    return <div>
                <div className={`banner ${isAboutPage ? 'pageApropos' : 'pageIndex'}`}>
                    <div className={`accroche ${isAboutPage ? 'pageApropos' : ''}`}>
                        Chez vous, partout et ailleurs
                    </div>
                </div>;
            </div>
}

export default Banner;