import NumberList from "./NumberList";

type FirstScreenProps = {
    label1: string;
    label2: string;    

}

export default function FirstScreen({label1, label2}: FirstScreenProps) {

    return (
        <div className="first-screen">
            <div className="container">
                <h2>{label1}</h2>
                <h4>{label2}</h4>
                <NumberList />
            </div>
        </div>
    )
}