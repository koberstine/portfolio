import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => (
  <div>
    <p>&copy; 2021 Chris Koberstine</p>
    <ul>
    <a href="https://github.com/koberstine"> <FaGithub size={42} /> </a>
    <a href="https://www.linkedin.com/in/chris-koberstine-754782a4/"> <FaLinkedin size={42} /> </a>
    <a href="https://stackoverflow.com/users/15635948/koberstine"> <FaStackOverflow size={42} /> </a>
    </ul>
  </div>
); 

export default Footer;