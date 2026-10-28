import NumberItem from "./NumberItem";

type NumberListProps = {

}

export default function NumberList({ }: NumberListProps) {
    return (
        <div className="number-list">
            <NumberItem />
            <NumberItem />
            <NumberItem />
            <NumberItem />
        </div>
    )

}