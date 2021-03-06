import React from 'react';
import {Link} from "react-router-dom";
// import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import "./navbar.css";


export const Navbar = ({setUser, setBool}) => {

  const logOutHandler = (e) =>{
    e.preventDefault();
    setUser();
  }

    return (
        // <NavbarContainer> 
 <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/profile" className="navText"><FontAwesomeIcon icon={faHome} /> My Feed </Link>
          </li>
          <li>
            <Link to="/MyPosts" className="navText"><FontAwesomeIcon icon={faComment} /> Posts </Link>
          </li>
          <li>
            <Link onClick={() => setBool(false)} to="/FullMap" className="navText"><FontAwesomeIcon icon={faGlobeAmericas} /> Map </Link> 
          </li>
          <li>
            <Link to="/account" className="navText"><FontAwesomeIcon icon={faUserCircle} /> Account Details </Link>
          </li>
          <li>
            <button className="btn-logout" onClick={(e) =>logOutHandler(e)}>Logout</button>
            {/* don't forget to pass the 'e' along the whole way for the re-renders to work as intended */}
          </li>
        </ul>
      </nav>
     
//     //   </NavbarContainer>
    );
  
};