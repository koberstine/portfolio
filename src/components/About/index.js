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
  <div>
    <h1>About Me</h1>
    <Avatar className={classes.blue}>CK</Avatar>
    <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
  </div>
  )};

export default About;
