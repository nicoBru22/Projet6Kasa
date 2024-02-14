import '../style/CardsAccueil.scss';

function Cards({cover, title}) {
    return(
        <div className="cards">
            <div className="coverCards">
                <img src={cover} alt={title} className="imageCards" />
            </div>
            <div className="titreLocation">
                {title}
            </div>
        </div>
    )
}

export default Cards;