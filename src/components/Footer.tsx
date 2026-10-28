
type FooterProps = {
    label1: string;
    label2: string;

}

export default function Footer({label1, label2 }: FooterProps) {
    return (
        <div className="footer">
            <div className="container footer-inner">
                <p>{label1}</p>
                <p>{label2}</p>
            </div>
        </div>
    )
}
