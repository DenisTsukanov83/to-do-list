import React, { FC, MouseEvent, ChangeEvent} from "react";
import './Task.css';
import trash from '../../sources/trash.png';

interface TaskProps {
    data: {
        index: number;
        task: string;
        priority: number;
        isDone: boolean;
        status: string;
        hour: string
    },
    i: number,
    deleteTask: (e: MouseEvent<HTMLElement>) => any,
    addTask: (e: ChangeEvent<HTMLInputElement>, priority: number) => any,
    onSelect: (e: ChangeEvent<HTMLSelectElement>) => any,
    priority: number,
    onCheck: (e: ChangeEvent<HTMLInputElement>) => any,
    onChangedTask: (e: MouseEvent<HTMLElement>) => any,
    changedTask: {date: Date, hour: string, index: number}
}

const Task: FC<TaskProps> = ({ data, i, deleteTask, addTask, onSelect, priority, onCheck, onChangedTask, changedTask }) => {
    const mySelect = React.createRef<HTMLSelectElement>();
    const myCheckbox = React.createRef<HTMLInputElement>();
    const colorBg = data.index === changedTask.index ? 'changed' : '';

    return (
        <div className={`task ${colorBg}`} data-task={data.index} onClick={onChangedTask}>
            <strong>{`${i + 1}.`}</strong>
            <input className="task-input" type="text" value={data.task} name={`${i}`} onChange={(e) => addTask(e, mySelect.current ? +mySelect.current.value : 0)} placeholder="Введите название задачи" autoComplete="off"/>
            <select ref={mySelect} value={priority} onChange={onSelect} name={`${i}`}>
                <option value={0}>Важный</option>
                <option value={1}>Обычный</option>
                <option value={2}>Не важный</option>
            </select>
            <input type="checkbox" className="task-check" ref={myCheckbox} name={`${data.index}`} onChange={onCheck} checked={data.isDone}/>
            <button className=" btn task-trash" onClick={deleteTask}>
                <img src={trash} alt="" data-index={i} />
            </button>
        </div>

    )
}

export default Task;