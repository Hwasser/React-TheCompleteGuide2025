import { useRef, useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import CreateProject from "./components/CreateProject";

const emptyProject = {
  title: "Untitled",
  createdDate: "",
  description: "",
  dueDate: "",
  tasks: [],
};

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [creatingProject, setCreatingProject] = useState(false);

  const projectIdCounter = useRef(0);

  function handleAddProject(title, description, dueDate) {
    const currentDate = new Date();
    const dateStrings = currentDate.toDateString().split(" ");
    const formatedDateString = `${dateStrings[1]} ${dateStrings[2]}, ${dateStrings[3]}`  
    const currentProjectId = projectIdCounter.current++;

    setProjects(prev => {
      const newProjectsList = [...projects];
      const newProject = {...emptyProject};

      newProject.createdDate = formatedDateString;
      newProject.title = title;
      newProject.description = description;
      newProject.dueDate = dueDate;
      newProject.id = currentProjectId;

      setSelectedProject(newProject);
      setCreatingProject(false)

      newProjectsList.push(newProject);
      return newProjectsList;
    })
  }

  function handleEditTasks(taskList) {
    const updatedProject = selectedProject;
    updatedProject.tasks = taskList;

    setSelectedProject(updatedProject)
  }

  function handleSelectProject(selectedId) {
    const selected = projects.find(project => project.id === selectedId);
    setSelectedProject(selected);
    setCreatingProject(false)
  }

  function openCreateProjectView() {
    setCreatingProject(true);
  }

  function closeCreateProjectView() {
    setCreatingProject(false);
  }

  console.log(projects);

  return (
    <>
      <div className="flex">
        <Sidebar projects={projects} selectedProject={selectedProject} onCreateProject={openCreateProjectView} onSelectProject={handleSelectProject} />
        <main className="mt-24">
          {
            (creatingProject)
              ? <CreateProject onCloseProject={closeCreateProjectView} onAddProject={handleAddProject} />
              : selectedProject ? <Project selectedProject={selectedProject} onEditTasks={handleEditTasks} /> : <NoProject onCreateProject={openCreateProjectView} />
          }
        </main>
      </div>
    </>
  );
}

export default App;
