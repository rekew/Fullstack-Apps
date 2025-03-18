import '../styles/SecondaryButton.css'

type SecondaryButtonProp = {
    text : string;
    onClick : (e : React.MouseEvent<HTMLButtonElement>) => void;
}

function SecondaryButton({text, onClick} : SecondaryButtonProp){
    return(
        <button className="secondary-button" onClick = {onClick}>{text}</button>
    )
}

export default SecondaryButton