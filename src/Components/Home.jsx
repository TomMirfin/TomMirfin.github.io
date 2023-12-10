import { useContext } from "react";
import { ArticleContext } from "../Context/ArticleContext";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function Home() {
  const { article } = useContext(ArticleContext);

  return (
    <div>
      {article === "aboutMe" && <Aboutme />}
      {article === "projects" && <Projects />}
      {article === "contactMe" && <ContactMe />}
    </div>
  );
}

export default Home;
