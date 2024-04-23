import { Link, Outlet, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import { getProjects, Project } from "../projects";

export async function loader() {
  const projects = await getProjects();
  return { projects };
}

export default function Root() {
  const { projects } = useLoaderData() as { projects: Project[] };

  return (
    <>
      <div id="sidebar">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
        <h1>Projects</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search projects"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav>
          {projects.length ? (
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <Link to={`${project.id}`}>{project.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Projects</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
