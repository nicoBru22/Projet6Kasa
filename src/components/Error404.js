import { Link } from 'react-router-dom';
import '../style/Error404.scss'

function Error404() {
        return (
            <div className='elementsError'>
                <div className='numberError elementError'>404</div>
                <div className='oups elementError'>Oups ! La page que vous demandez n'existe pas</div>
                <Link to="/" className='retourAccueil elementError'>Retourner sur la page d'accueil</Link>
            </div>
        );
    }

export default Error404;