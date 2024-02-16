import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes,} from 'react-router-dom';
import HomePage from './components/PageIndex';
import Apropos from './components/PageApropos';
import PageError from './components/PageError';
import PageLogement from './components/PageLogement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" exact Component={HomePage}  />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/PageError" element={<PageError />} />
          <Route path="/Logement" element={<PageLogement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
