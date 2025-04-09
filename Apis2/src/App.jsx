import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DragonBall from './pages/DragonBall';
import RickAndMorty from './pages/RickAndMorty';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Multi-Universe App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dragonball">
                    Dragon Ball
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/rickandmorty">
                    Rick and Morty
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/dragonball" element={<DragonBall />} />
          <Route path="/rickandmorty" element={<RickAndMorty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

