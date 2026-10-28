import NumberItem from "./NumberItem";

type Number = {
    id: string;
    how_much: string;
    what: string;
    where: string;
}

type NumberListProps = {
    numberList: Number[];

}

export default function NumberList({ numberList }: NumberListProps) {
    return (
        <div className="number-list">
            {numberList .map((number) => (
                <NumberItem
                    key={number.id}
                    how_much={number.how_much}
                    what={number.what}
                    where={number.where} />
            ))}

        </div>
    )

}