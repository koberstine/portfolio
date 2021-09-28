import React from "react";
import projects from "../Project"
import { FaGithub } from "react-icons/fa";

const Portfolio = () => (

  <section>
    <h2 class="title">Portfolio of Projects</h2>
    <div>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {projects.map((project, i) => (
          <div style={{flexDirection: "column", margin: 30}}>
            <a href={project.deployed}>
              <h3 class="project-name">{project.name}
                <a href={project.github}> <FaGithub size={28} /> </a>
              </h3>
            </a>
            <p class="project-tech">{project.tech}</p>
            <img
              key={i}
              src={require(`../../assets/images/image${i}.jpg`).default}
              onMouseOver={e => (e.currentTarget.src=require(`../../assets/images/screenshot${i}.jpg`).default)}
              onMouseOut={e => (e.currentTarget.src=require(`../../assets/images/image${i}.jpg`).default)}
              alt={project.name}
              style={{width: 300, height: 150}}
              />
          </div>
        ))}
      </div>   
    </div>
  </section>
);

export default Portfolio;
