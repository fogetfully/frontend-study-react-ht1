import NumberList from "./NumberList";

type Number = {
    id: string;
    how_much: string;
    what: string;
    where: string;
}

type FirstScreenProps = {
    label1: string;
    label2: string;    
    numberList: Number[];

}

export default function FirstScreen({label1, label2, numberList}: FirstScreenProps) {

    return (
        <div className="first-screen">
            <div className="container">
                <h2>{label1}</h2>
                <h4>{label2}</h4>
                <NumberList numberList={numberList}/>
            </div>
        </div>
    )
}