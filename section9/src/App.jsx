import { useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

const emptyProject = {
  title: "",
  date: "",
  description: "",
  tasks: [],
};

function App() {
  const [projects, setProjects] = useState([]);

  function addProject() {
    setProjects(prev => {
      const newProjectsList = [...projects];
      const newProject = {...emptyProject};
      newProjectsList.push(newProject);
      return newProjectsList;
    })
  }

  return (
    <>
      <main className="flex">
        <Sidebar />
        <Project projects={projects} />
      </main>
    </>
  );
}

export default App;
