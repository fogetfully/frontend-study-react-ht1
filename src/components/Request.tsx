
type RequestProps = {
    label1: string;
    label2: string;
    label3: string;
}

export default function Request({ label1, label2, label3}: RequestProps) {
    return (
        <div className="request">
            <div className="container request-inner">
                <div className="request-text">
                    <h2>{label1}</h2>
                    <h4>{label2}</h4>
                </div>
                <button>{label3}</button>
            </div>
        </div>
    )
}
