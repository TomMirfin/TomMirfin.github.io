import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import { projects } from "../Data/projectData";
import { v4 as uuid } from "uuid";
import { Fade } from "react-awesome-reveal";
function Projects() {
  return (
    <div className="about-me">
      <section className="about-me-body">
        <h2>Skillset</h2>
        <ul className="skill-set-list">
          <li>
            <IoLogoJavascript />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaNodeJs />
          </li>
          <li>
            <TbSql />
          </li>
          <li>
            <SiJest />
          </li>
        </ul>

        <h2>Projects</h2>
        <Fade>
          <section>
            {projects.map((project) => {
              return <ProjectCard project={project} key={uuid()} />;
            })}
          </section>
        </Fade>
      </section>
    </div>
  );
}

export default Projects;
