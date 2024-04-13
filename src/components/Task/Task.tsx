import React, {FC, MouseEvent, useEffect} from "react";
import './Task.css';
import trash from '../../sources/trash.png';

interface TaskProps{
    data: string,
    i: number,
    deleteTask: (e: MouseEvent<HTMLElement>) => any
}

const Task: FC<TaskProps> = ({data, i, deleteTask}) => {
    const myRef = React.createRef<HTMLInputElement>();
    

    useEffect(() => {
        if(myRef.current) {
            myRef.current.focus();
        }
    })

    return (
        <div className="task">
            <strong>{`${i + 1}.`}</strong>
            <input ref={myRef} type="text" value={data} name={`${i}`}/>
            <span className="task-trash" onClick={deleteTask}>
                <img src={trash} alt="" data-index={i}/>
            </span>
        </div>
        
    )
}

export default Task;