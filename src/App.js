import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/PageIndex';
import Apropos from './components/PageApropos';
import PageError from './components/PageError';
import PageLogement from './components/PageLogement';
import { Helmet } from 'react-helmet';
import favicon from './images/favicon.png';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Kasa</title>
        <link rel="icon" type="image/png" href={favicon} className='favicon' /> 
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<PageLogement />} />
          <Route path="/*" element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
