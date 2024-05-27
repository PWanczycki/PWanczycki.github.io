import { Outlet, useLoaderData } from "react-router-dom";
import { getProjects, Project } from "../projects";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export async function loader() {
  const projects = await getProjects();
  return { projects };
}

export default function ProjectsList() {
  useEffect(() => {
    document.title = "Philip Wanczycki - Projects";
  }, []);

  const { projects } = useLoaderData() as { projects: Project[] };

  return (
    <div className="container">
      <Navbar
        items={projects.map((project, index) => ({
          route: index.toString(),
          name: project.name,
        }))}
        heading="Projects"
        homeLink="/"
      />
      <div className="detail pattern">
        <Outlet />
      </div>
    </div>
  );
}
