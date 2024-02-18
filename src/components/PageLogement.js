import Footer from "./Footer";
import Header from "./Header";
import "../style/PageLogement.scss";
import dataLogement from './logements.json';
import Collapse from "./Collapse";

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PageLogement() {
    let { id } = useParams();
    const navigate = useNavigate();

    const logement = dataLogement.find(logement => logement.id === id);

    if (!logement) {
        navigate("/PageError");
        return null;
    }

    return (
        <div className="">
            <Header/>
            <div key={logement.id}>
                <img src={logement.cover} alt={logement.title} className="coverLogement" />
                <div className="enteteLogement">
                    <div className="titreLieu">
                        <div className="titreLogement">{logement.title}</div>
                        <div className="lieuLogement">{logement.location}</div>
                    </div>
                    <div className="loueur">
                        <div className="nomLoueur">le nom du loueur :{logement.host.name}</div>
                        <img src={logement.host.picture} alt="logo du loueur" />
                    </div>
                </div> 
                <div className="tagRates">
                    <div className="tags">{logement.tags}</div>
                    <div className="rates">{logement.rating}</div>
                </div>
                <div className="collapseLogement">
                    <Collapse titreCollapse="Description" contenu={logement.description}/>
                    <Collapse titreCollapse="Equipements" contenu={logement.equipments}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageLogement;
