import CardsAccueil from './CardsAccueil'; // Assurez-vous d'avoir importé votre composant "Cards"
import dataLogement from './logements.json'; // Importez vos données JSON

function DataLogement() {
    return (
        <div className="lesLogements">
            {dataLogement.map((logement, id) => (
                <CardsAccueil
                    key={id} // Assurez-vous de fournir une clé unique
                    cover={logement.cover} // Utilisez logement.cover pour accéder à la couverture de chaque logement
                    title={logement.title} // Utilisez logement.title pour accéder au titre de chaque logement
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