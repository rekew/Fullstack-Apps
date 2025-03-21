import Navbar from "../components/Navbar"
import Box from "../components/Box"
import '../styles/pages/Board.css'

function Board(){
    return (
        <div className="board">
            <Navbar showLink = {false}/>
            <Box></Box>
        </div>
    )
}

export default Board