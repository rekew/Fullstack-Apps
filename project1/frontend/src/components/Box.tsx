import "../styles/components/Box.css"
import { useState } from "react"

type BoxType = {
    id : number;
    items : string[];
}

type DragItemType = {
    item : string;
    boxId : number;
} | null;

function Box(){

    const [boxes, setBoxes] = useState<BoxType[]>([
        {id : 1, items : ['First Item']},
        {id : 2, items : ['Second Item']},
    ]);

    const [dragItem, setDragItem] = useState<DragItemType>(null);

    

    return(
        <>
            <div className="container">
                <div className="boxes">
                   
                </div>
            </div>
        </>
    )
}

export default Box