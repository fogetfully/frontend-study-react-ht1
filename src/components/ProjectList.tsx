import ProjectItem from "./ProjectItem";
// import Project from "../App";

type Project = {
    id: string;
    title: string;
    body: string;
}

type ProjectListProps = {
    label: string,
    projetList: Project[];
}

export default function ProjectList({ label, projetList }: ProjectListProps) {
    return (
        <div className="projects-section container">
            <h2>{label}</h2>
            <div className="project-list">
                {projetList.map((project) => (
                    <ProjectItem
                        key={project.id}
                        title={project.title}
                        body={project.body} />
                ))}
            </div>
        </div>
    )
}