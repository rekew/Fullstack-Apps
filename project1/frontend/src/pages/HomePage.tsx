import Navbar from "../components/Navbar"
import "../styles/HomePage.css"
import Button from "../components/Button"

function HomePage(){
    return(
        <>
            <Navbar showLink = {true}></Navbar>
            <div className="container">
                <div className="homepage">
                    <h1>Your boards</h1>
                    <Button text = 'Create new board' sign = {true}/>
                </div>
            </div>
        </>
    )
}

export default HomePage