import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes,} from 'react-router-dom';
import HomePage from './components/Index';
import Apropos from './components/Apropos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" exact Component={HomePage}  />
          <Route path="/Apropos" element={<Apropos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
