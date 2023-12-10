import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { ArticleProvider } from "./Context/ArticleContext";

function App() {
  return (
    <ArticleProvider>
      <>
        <Nav />
        <Home />
      </>
    </ArticleProvider>
  );
}

export default App;
