import Navbar from "../components/Navbar"
import "../styles/Register.css"
import Input from "../components/Input"
import SecondaryButton from "../components/SecondaryButton"
import { useState } from "react"

function Register(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [FullNameError, setFullNameError] = useState('');
    const [fullName, setFullName] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/

    const handleSubmit = async () => {
        let valid = true;

        if(!emailRegex.test(email)){
            setEmailError('Invalid email format')
            valid = false;
        }
        else{
            setEmailError('');
        }

        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters, include letters and numbers');
            valid = false;
        } else {
            setPasswordError('');
        }

        if(!fullName){
            setFullNameError('Please type in your full name');
            valid = false;
        }
        else{
            setFullNameError('')
        }

        if(valid){
            try{
                const userData = {
                    email : email,
                    full_name : fullName,
                    password : password,
                }
                const response = await fetch('http://127.0.0.1:8000/register/', {
                    method : 'POST',
                    headers : {
                        "Content-Type": "application/json",
                    },
                    body : JSON.stringify(userData),
                });
    
                const data = await response.json()
                console.log('Server response: ', data)
            }
            catch(error){
                console.error("Error: ", error);
            }
        }
    }

    return(
        <>
            <Navbar showLink = {false}/>
            <div className="container">
                <div className="register">
                    <h1 className="register-header">Get started with Task Master</h1>
                    <div className="register-forms">
                    <Input 
                            text='Email' 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            error={emailError}
                        />
                        <Input 
                            text='Full name' 
                            type='text' 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)}
                            error = {FullNameError}
                        />
                        <Input 
                            text='Password' 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            error={passwordError}
                        />
                        <SecondaryButton onClick = {() => handleSubmit()} text = 'Sign Up'/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Register