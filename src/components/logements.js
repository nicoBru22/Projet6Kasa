import CardsAccueil from './CardsAccueil';
import dataLogement from './logements.json';

function DataLogement() {
    return (
        <div className="lesLogements">
            {dataLogement.map((logement) => (
                <CardsAccueil
                    key={logement.id}
                    id={logement.id}
                    cover={logement.cover}
                    title={logement.title}
                    description={logement.description}
                    location={logement.location}
                    tags={logement.tags}
                    equipments={logement.equipments}
                    rating={logement.rating}
                    pictures={logement.pictures}
                />
            ))}
        </div>
    );
}

export default DataLogement;