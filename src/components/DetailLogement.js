import React from 'react';
import Collapse from "./Collapse";
import Carousel from "./Slideshow";
import genererEtoiles from "./Rate";
import "../style/DetailLogement.scss";

function DetailLogement({logement}) {
    return (
        <div className="detailLogement">
            <div key={logement.id}>
                <div className="carousel">
                    <Carousel images={logement.pictures} />
                </div>
                <div className="infoLogement">
                    <div className='sectionInfo'>
                        <div className="enteteLogement">
                            <div className="titreLieu">
                                <div className="titreLogement">{logement.title}</div>
                                <div className="lieuLogement">{logement.location}</div>
                            </div>
                            <div className="tagRates">
                                <div className="divTag">{logement.tags.map((tag, index) => 
                                    <div key={index} className="tag">{tag}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className="profilLoueur">
                            <div className="loueur">
                                <div className="nomLoueur">{logement.host.name}</div>
                                <img className="imageLoueur" src={logement.host.picture} title={logement.host.name} alt="logo du loueur" />
                            </div>
                            <div className="rates">{genererEtoiles(logement.rating)}</div>
                        </div>
                    </div>
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
