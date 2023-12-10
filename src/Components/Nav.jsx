import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useContext, useState } from "react";
import { ArticleContext } from "../Context/ArticleContext";

function Nav() {
  const { setArticle } = useContext(ArticleContext);

  const clickHandler = (article) => {
    setArticle(article);
  };

  return (
    <nav className="nav">
      <h1>Tom Mirfin</h1>
      <ul className="nav-title">
        <li>
          <a href="https://github.com/TomMirfin" target="_blank">
            <GitHubIcon style={{ fontSize: "xx-large" }} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tom-mirfin/" target="_blank">
            <LinkedInIcon style={{ fontSize: "xx-large" }} />
          </a>
        </li>
        <li>
          <i className="fa-brands fa-hashnode"></i>
        </li>
      </ul>
      <ul className="nav-items">
        <li
          onClick={() => {
            clickHandler("aboutMe");
          }}
        >
          About Me
        </li>
        <li
          onClick={() => {
            clickHandler("projects");
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            clickHandler("contactMe");
          }}
        >
          Contact Me
        </li>
        <a
          href="https://tommirfin.hashnode.dev/"
          target="_blank"
          className="blog-link"
        >
          Blog
        </a>
      </ul>
      <ul className="nav-personal-details">
        <li>
          Location: <span>York</span>
        </li>
        <li>
          Job Title: <span>Junior Software Developer</span>
        </li>
        <li>
          Available from: <span>January </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
