import React from "react";
import projects from "../Project"
import { FaGithub } from "react-icons/fa";

const Portfolio = () => (

  <section>
    <div class="flex flex-row">
      <div class="flex flex-column">
        {projects.map((project, i) => (
          <><a href={project.deployed}>
              <h2 class="project-name">{project.name}
                <a href={project.github}> <FaGithub size={14} /> </a>
              </h2>
            </a>
            <p class="project-tech">{project.tech}</p>
            <img
              key={i}
              src={require(`../../../assets/images/image${i}.jpg`).default}
              onMouseOver={e => (e.currentTarget.src=require(`../../../assets/images/screenshot${i}.jpg`).default)}
              onMouseOut={e => (e.currentTarget.src=require(`../../../assets/images/image${i}.jpg`).default)}
              alt={project.name}
              style={{width: 300, height: 150}}
              /></>
        ))}
      </div>   
    </div>
  </section>
);

export default Portfolio;
