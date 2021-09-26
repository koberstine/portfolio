import React from "react";
import { FaFilePdf } from "react-icons/fa";
import resumeDownload from "../../assets/images/chris-koberstine-resume.pdf"

const Resume = () => (

  <section>
    <h1 class="title">Resume Download</h1>
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
