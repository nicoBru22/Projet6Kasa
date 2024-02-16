import Footer from "./Footer"
import Header from "./Header"
import "../style/PageLogement.scss"
import dataLogement from './logements.json';

function PageLogement() {
    return (
        <div className="">
            <Header/>
            {dataLogement.map((logement, id) => (
                <div key={id}>
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
                        <div className="description">La collapse description</div>
                        <div className="equipements">La collapse equipements</div>
                        </div>
                </div>
            ))}
            <Footer />
        </div>
    );
}



export default PageLogement;