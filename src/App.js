import Nav from './compenents/Nav';
import Home from './/compenents/Home';
import About from './compenents/About';
import Campaign from './compenents/Camp';


import './Styles/Layout.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/camp" element={<Campaign />} />
          <Route path="/" element={ <Home />} />    
        </Routes>
      </div>
    </Router>
    </div>
  );
}



export default App;
