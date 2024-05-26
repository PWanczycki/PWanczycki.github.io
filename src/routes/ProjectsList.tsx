import { Link, Outlet, useLoaderData, NavLink } from "react-router-dom";
import Button from "../components/Button";
import { getProjects, Project } from "../projects";
import { useEffect } from "react";

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
      <div className="sidebar">
        <div className="sidebar-header">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <h1>Projects</h1>
        </div>
        {/* <div className="full-width">
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
        </div> */}
        <nav className="">
          <div className="navbar full-width">
            {projects.length ? (
              <ul className="navbar-nav">
                {projects.map((project) => (
                  <NavLink
                    to={`${project.id}`}
                    className={({ isActive, isPending }) =>
                      "nav-link" +
                      (isActive ? " active" : isPending ? " pending" : "")
                    }
                  >
                    <li key={project.id} className="nav-item">
                      {project.name}
                    </li>
                  </NavLink>
                ))}
              </ul>
            ) : (
              <p>
                <i>No Projects</i>
              </p>
            )}
          </div>
        </nav>
      </div>
      <div className="detail pattern">
        <Outlet />
      </div>
    </div>
  );
}
