import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

function genererEtoiles(note) {
    const etoiles = [];

    for (let i = 0; i < 5; i++) {
        if (i < note) {
            etoiles.push(<div key={i} className="etoilePleine">
                <FontAwesomeIcon icon={fasStar} /></div>);
        } else {
            etoiles.push(<div key={i} className="etoileVide" style={{ color: '#E3E3E3' }}>
                <FontAwesomeIcon icon={fasStar} /></div>);
        }
    }

    return etoiles;
}

export default genererEtoiles;