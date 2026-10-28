type NumberItemProps = {
    how_much: string;
    what: string;
    where: string;

}

export default function NumberItem({ how_much, what, where }: NumberItemProps) {
    return (
        <div className="number-item">
            <h1>{how_much}</h1>
            <h2>{what}</h2>
            <p>{where}</p>
        </div>
    )
}
