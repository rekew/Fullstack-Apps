import '../styles/components/Input.css'

type InputProp = {
    text: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

function Input({ text, type, value, onChange, error }: InputProp) {
    return (
        <>
            <form action="" className='register-form'>
                <h1>{text}</h1>
                <input 
                    type={type} 
                    value={value} 
                    onChange={onChange} 
                    className={`input-field ${error ? 'input-error' : ''}`}
                />
            </form>
            {error && <p className="error-text">{error}</p>}
        </>
    )
}

export default Input;
