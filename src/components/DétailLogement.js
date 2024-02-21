import "../style/DetailLogement.scss";
import dataLogement from './logements.json';
import Collapse from "./Collapse";
import Carousel from "./Slideshow";

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function genererEtoiles(note) {
    const etoiles = [];
    for (let i = 0; i < note; i++) {
        etoiles.push(<div key={i} className="etoile">★</div>);
    }
    return etoiles;
}

function DetailLogement() {
    let { id } = useParams();
    const navigate = useNavigate();

    const logement = dataLogement.find(logement => logement.id === id);

    if (!logement) {
        navigate("./PageError");
        return null;
    }

    return (
        <div className="detailLogement">
            <div key={logement.id}>
                <div className="carousel">
                    <Carousel images={logement.pictures} />
                </div>
                <div className="enteteLogement">
                    <div className="titreLieu">
                        <div className="titreLogement">{logement.title}</div>
                        <div className="lieuLogement">{logement.location}</div>
                    </div>
                    <div className="loueur">
                        <div className="nomLoueur">{logement.host.name}</div>
                        <img className="imageLoueur" src={logement.host.picture} alt="logo du loueur" />
                    </div>
                </div> 
                <div className="tagRates">
                    <div className="tags">
                    {genererEtoiles(logement.rating)}
                    </div>
                    <div className="rates">{logement.rating}</div>
                </div>
                <div className="collapseLogement">
                    <Collapse className="collapseDE" titreCollapse="Description" contenu={logement.description}/>
                    <Collapse className="collapseDE" titreCollapse="Equipements" contenu={logement.equipments}/>
                </div>
            </div>
        </div>
    );
}



export default DetailLogement;
