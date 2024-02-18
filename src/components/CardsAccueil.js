import '../style/CardsAccueil.scss';
import { Link } from 'react-router-dom';

function CardsAccueil({cover, title, id}) {
    return(
        <div className="cards">
            <div className="coverCards">
                <img src={cover} alt={title} className="imageCards" />
            </div>
            <div className="titreLocation">
                {title}
            </div>
            <div>
                id du logement {id}
            </div>
            <li className="details">
            <Link to={`./Logement/${id}`}>Plus de détails</Link>
            </li>
        </div>
    )
}

export default CardsAccueil;