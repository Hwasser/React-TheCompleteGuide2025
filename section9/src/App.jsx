import { useRef, useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

const emptyProject = {
  title: "Untitled",
  date: "",
  description: "",
  tasks: [],
};

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectIdCounter = useRef(0);

  function handleAddProject() {
    const currentDate = new Date();
    const dateStrings = currentDate.toDateString().split(" ");
    const formatedDateString = `${dateStrings[1]} ${dateStrings[2]}, ${dateStrings[3]}`  
    const currentProjectId = projectIdCounter.current++;

    setProjects(prev => {
      const newProjectsList = [...projects];
      const newProject = {...emptyProject};

      newProject.date = formatedDateString;
      newProject.id = currentProjectId;

      setSelectedProject(newProject);

      newProjectsList.push(newProject);
      return newProjectsList;
    })
  }

  function handleSelectProject(selectedId) {
    const selected = projects.find(project => project.id === selectedId);
    setSelectedProject(selected);
  }

  console.log(projects);

  return (
    <>
      <div className="flex">
        <Sidebar projects={projects} selectedProject={selectedProject} onAddProject={handleAddProject} onSelectProject={handleSelectProject} />
        {selectedProject && <Project selectedProject={selectedProject} />}
      </div>
    </>
  );
}

export default App;
