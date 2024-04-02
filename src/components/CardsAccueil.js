import '../style/CardsAccueil.scss';
import { Link } from 'react-router-dom';

function CardsAccueil({cover, title, id}) {
    return(
        <Link to={`./logement/${id}`} className="cards">
                <div className="coverCards">
                    <img src={cover} alt={title} title={title} className="imageCards" />
                </div>
                <div className="titreLocation">
                    {title}
                </div>
        </Link>
    )
}

export default CardsAccueil;