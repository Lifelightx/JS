import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <>
        <nav className="navbar">
        <h3>{props.name}</h3>
        <ul>
          <li>Home</li>
          <li>{props.aboutText}</li>
          <li>Project</li>
          <li>Contact</li>
        
        </ul>
      </nav>
    
    </>
  )
}
Navbar.propTypes = {
    name: PropTypes.string, //string.isrequired throws an error if default and prop is not given.
    aboutText: PropTypes.string,
};

Navbar.defaultProps = {
    name: 'set title here',
    aboutText:'set about'
};