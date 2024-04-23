export interface Project {
    id: string;
    name: string;
    description: string;
}

const projects: Project[] = [
    {
        id: "1",
        name: "Test 1",
        description: "This is project 1",
    },
    {
        id: "2",
        name: "Project 2",
        description: "This is project 2",
    },
];

export async function getProjects() {
    return projects;
}

export async function getProject(id: string) {
    return projects.find((project) => (project.id === id));
}