import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
function ProjectCard({ project }) {
  console.log(project.gitHubLink);
  return (
    <section className="project-card">
      <div
        className="indi-project-card"
        style={{
          backgroundImage: `url(https://i.postimg.cc/5ymLH6bR/Screenshot-from-2023-12-10-12-34-56.png)`,
        }}
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
            <a href={`${project.gitHubLink}`} target="_blank">
              GitHub <GitHubIcon />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
