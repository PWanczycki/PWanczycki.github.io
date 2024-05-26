export interface Project {
    name: string;
    date: string;
    description: string;
    repo?: string;
}

const projects: Project[] = [
    {
        name: "Portfolio Website",
        date: "May 2023",
        description: "Developed a responsive website using React, TypeScript, and Vite, which showcases my projects and skills. Leveraged React Router to enable seamless navigation between pages, improving user experience and SEO. Applied knowledge of CSS media queries to create a visually appealing layout that adapts to various screen sizes."
    },
    {
        name: "Album Cover Genre Classification Neural Network",
        date: "April 2023",
        description: "Designed and trained an image classifier in Python based on the VGG16 neural network architecture, leveraging fine-tuning of pre-trained ImageNet models to improve accuracy in genre recognition tasks by 22%. Wrote several pre-processing scripts in Python, allowing new configurations of raw image data to be properly interpreted by the neural network.",
    },
    {
        name: "“Quests” Multiplayer Online Card Game",
        date: "April 2022",
        description: "Implemented networking capabilities leveraging Java multi-threading and socket networking libraries to maximize scalability, which let the team easily refactor the project's design as the client shared feedback. Applied Observer and Singleton design patterns strategically to avoid anti-patterns that could make the project harder to further develop and maintain.",
    },
    {
        name: "SSBM Statistics Database",
        date: "Apr 2022",
        description: "Designed an SQLite database using knowledge of functional dependencies and normalization to ensure that the database cannot be subject to data loss from faulty queries and insertions. Applied knowledge of SQL vulnerabilities in the creation of a Python GUI wrapper for the database, resulting in an easy-to-use point of access with protection from SQL injection attacks.",
    }
];

export async function getProjects() {
    return projects;
}

export async function getProject(id: string) {
    return projects[parseInt(id, 10)];
}