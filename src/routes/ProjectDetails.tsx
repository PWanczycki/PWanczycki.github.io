import { Params, useLoaderData } from "react-router-dom";
import { Project, getProject } from "../projects";

export async function loader({ params }: { params: Params<"projectId"> }) {
  const project = await getProject(params.projectId as string);
  return { project };
}

function ProjectDetails() {
  const { project } = useLoaderData() as { project: Project };

  return (
    <div>
      <h1>{project.name}</h1>
      <p className="date">
        <i>{project.date}</i>
      </p>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetails;
