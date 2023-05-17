
import {Link } from 'react-router-dom';

import logo from '../assets/logob.jpg';

import '../Styles/nav.css';

const Nav = () => {
    
    return (
        <div className="nav-cont">
          <img src={logo} alt="" />
          <nav id='nav'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/camp">Campaign</Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Nav;