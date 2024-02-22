import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/PageIndex';
import Apropos from './components/PageApropos';
import PageError from './components/PageError';
import PageLogement from './components/PageLogement';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Logement/:id" element={<PageLogement />} />
          <Route path="/Logement/*" element={<PageError />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
