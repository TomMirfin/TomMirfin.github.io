import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
function ProjectCard({ project }) {
  console.log(project.imgPath);
  return (
    <section className="project-card">
      <div
        className="indi-project-card"
        style={{ backgroundImage: `url(${project.imgPath})` }}
      >
        ...
      </div>
      <div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <p>Tech Stack Used:</p>
        <div>{project.techStack} </div>
        <div className="button-container">
          <Button variant="contained" color="secondary">
            Link To Live
          </Button>
          <Button variant="contained" color="secondary">
            GitHub <GitHubIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
