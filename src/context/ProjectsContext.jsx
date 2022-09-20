import { createContext, useContext, useState, useEffect } from "react";
import { projects } from "./projects";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [myProjects, setMyProjects] = useState(projects);

  const values = {
    myProjects,
  };

  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
