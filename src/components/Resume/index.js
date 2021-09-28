import React from "react";
import { FaFilePdf } from "react-icons/fa";
import resumeDownload from "../../assets/images/chris-koberstine-resume.pdf"

const Resume = () => (

  <section>
    <h2 class="title">Technical Skills</h2>
    <div style={{fontSize: '1.2rem'}}>
      <p>Languages: JavaScript ES6+, CSS, HTML, SQL, NoSQL, GraphQL</p>
      <p>Applications: GitHub, MongoDB, MySQL</p>
      <p>Tools: Express, React, Node, Handlebars, Query, Bootstrap</p>
    </div>
    <h2 class="title">Resume Download</h2>
    <a 
      href={resumeDownload}
      download="Resume"
      target="_blank"
      rel="noreferrer">
      <button>
        <FaFilePdf fill='red' size={98}/>
      </button>
    </a>
  </section>
);

export default Resume;
