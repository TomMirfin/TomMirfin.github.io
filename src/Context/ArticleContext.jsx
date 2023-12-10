import { useState } from "react";
import { createContext } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState("aboutMe");

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
