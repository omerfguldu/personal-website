import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { ProjectsProvider } from "./context/ProjectsContext";
import { MailContentProvider } from "./context/MailContentContext";

function App() {
  return (
    <ProjectsProvider>
      <MailContentProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </MailContentProvider>
    </ProjectsProvider>
  );
}

export default App;
