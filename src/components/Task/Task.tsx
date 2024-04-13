import React, {FC, MouseEvent, useEffect, ChangeEvent} from "react";
import './Task.css';
import trash from '../../sources/trash.png';

interface TaskProps{
    data: string,
    i: number,
    deleteTask: (e: MouseEvent<HTMLElement>) => any,
    addTask: (e: ChangeEvent<HTMLInputElement>, priority: number) => any
}

const Task: FC<TaskProps> = ({data, i, deleteTask, addTask}) => {
    const myRef = React.createRef<HTMLInputElement>();
    const mySelect = React.createRef<HTMLSelectElement>()

    useEffect(() => {
        if(myRef.current) {
            myRef.current.focus();
        }
    })

    return (
        <div className="task">
            <strong>{`${i + 1}.`}</strong>
            <input ref={myRef} type="text" value={data} name={`${i}`} onChange={(e) => addTask(e, mySelect.current ? +mySelect.current.value : 0)}/>
            <select ref={mySelect}>
                <option value={0}>Обычный</option>
                <option value={1}>Важный</option>
                <option value={2}>Не важный</option>
            </select>
            <span className="task-trash" onClick={deleteTask}>
                <img src={trash} alt="" data-index={i}/>
            </span>
        </div>
        
    )
}

export default Task;