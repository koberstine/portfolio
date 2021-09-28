import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => (
  <div>
    <p>&copy; 2021 Chris Koberstine</p>
    <a href="mailto:koberstine@hotmail.com" target="_blank" rel="noreferrer">koberstine@hotmail.com</a>  
    <ul>
    <a href="https://github.com/koberstine" target="_blank" rel="noreferrer"> <FaGithub size={42} /> </a>
    <a href="https://www.linkedin.com/in/chris-koberstine-754782a4/" target="_blank" rel="noreferrer"> <FaLinkedin size={42} /> </a>
    <a href="https://stackoverflow.com/users/15635948/koberstine" target="_blank" rel="noreferrer"> <FaStackOverflow size={42} /> </a>
    </ul>
  </div>
); 

export default Footer;