import "../styles/Button.css"

type ButtonProps = {
    text : string;
    sign : boolean;
}

function Button({text, sign} : ButtonProps){
    return(
        <button className = 'mainButton'>
            <div className = 'sign'>
                {sign ? "+" : "-"}
            </div>
            {text}
        </button>
    )
}

export default Button