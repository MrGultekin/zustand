interface IInfoBoxProps {
    message: string;
}

const InfoBox = (props: IInfoBoxProps) => {
    const {message} = props;
    return (
        <div className="infoBox">
            <h2>Another component:</h2>
            <div className="row">
                <label>Message:</label>{' '}
                <span className="theValue">{message}</span>
            </div>
        </div>
    )
}

export default InfoBox;