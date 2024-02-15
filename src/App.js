import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes,} from 'react-router-dom';
import HomePage from './components/Index';
import Apropos from './components/Apropos';
import PageError from './components/PageError';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" exact Component={HomePage}  />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/PageError" element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
