
import arenaImage from "../assets/arena.jpg";

type ProjectItemProps = {
    title: string;
    body: string;

}

export default function ProjectItem({title, body }: ProjectItemProps) {
    return (
        <div className="project-item">
            <img src={arenaImage} alt="Арена" />
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}
