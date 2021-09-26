import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  blue: {
    background: 'linear-gradient(45deg, #00008B 30%, #ADD8E6 90%)',
    width: 90,
    height: 90,
    'font-size': '2.25rem'
  },
});

function About () {
  const classes = useStyles();

  return (
  <section>
    <h1 class="title">About Me</h1>
    <Avatar className={classes.blue}>CK</Avatar>
    <p>
      Full stack developer and U.S. Army veteran with experience in computer/network support and 
      customer service. Recently earned a certificate in full stack development from the University 
      of Central Florida. Skills in JavaScript, CSS and MERN stack (MongoBD, Express.js, Node.js and 
      React.js). With a goal to employ clean and organized code and self-commenting naming 
      conventions to build responsive applications that are easy for other developers and team 
      members to integrate. Excited to leverage my skills as part of a fast-paced, quality-driven 
      team to create applications solving real-world problems and delivering an outstanding user 
      experience.
    </p>
  </section>
  )};

export default About;
